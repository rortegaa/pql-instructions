import { useState, useEffect } from 'react'
import { Players, Teams } from '../lib/definitions';
import { fetchExistingTeams, fetchPlayers, validateTeamName, addTeam } from '../lib/actions';
import CreateTeamForm from './create-team-form';
import PlayerTable from './players-table';
import TeamsList from './teams';

export default function TeamCreationPage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedPlayers, setSelectedPlayers] = useState<Players[]>([]);
    const [data, setData] = useState<Players[]>([]);
    const [teams, setTeams] = useState<Teams[]>([]);
    const [reload, setReload] = useState(false);

    function handleChangeInputName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }

    function handleChangeInputDescription(e: React.ChangeEvent<HTMLInputElement>) {
        setDescription(e.target.value)
    }

    async function handleCreateTeam(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (name.length <= 0) {
            alert("Please select name for the team")
            return
        }

        if (selectedPlayers.length <= 0) {
            alert("Please select player to create the team")
            return
        }

        const teamsCreated = await fetchExistingTeams()

        if (validateTeamName(teamsCreated, name)) {
            alert("Team name already exists")
            return
        }

        const data: Teams = {
            name: name,
            slogan: description,
            players: selectedPlayers.map(player => player.id)
        }

        const newTeam: any = await addTeam(data)

        if (newTeam?.status === 201 || newTeam?.status === 204) {
            alert("team created sussesfully")
        }
        else {
            console.log(newTeam?.data);
            alert("something went wrong")
        }

        setName('')
        setDescription('')
        setSelectedPlayers([])

        setReload((prev) => !prev);

    }

    function togglePlayerSelection(player: Players) {
        if (selectedPlayers.some((p) => p.name === player.name)) {
            setSelectedPlayers(selectedPlayers.filter((p) => p.name !== player.name));
        } else {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responsePlayers = await fetchPlayers();
                setData(responsePlayers);


                const responseTeams = await fetchExistingTeams();
                setTeams(responseTeams);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();

    }, [reload]);

    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <TeamsList data={teams}></TeamsList>
                </div>
                <div className="col-md-10">
                    <CreateTeamForm name={name} slogan={description} onNameChange={handleChangeInputName} onDescriptionChange={handleChangeInputDescription} onCreateTeam={handleCreateTeam} />
                    <PlayerTable players={data} toggleSelection={togglePlayerSelection} totalSelected={selectedPlayers} />
                </div>
            </div>
        </>
    )
}