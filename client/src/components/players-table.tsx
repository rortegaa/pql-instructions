
import { Players } from "../lib/definitions";
import PlayerRow from "./players-table-row";

export default function PlayerTable({ players, toggleSelection, totalSelected }: { players: Players[], toggleSelection: (player: Players) => void, totalSelected: Players[] }) {

    return (
        <>
            <div className="row justify-content-center mt-4">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            Add Team
                        </div>
                        <div className="card-body">
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <p>Members added to the team: <span>{totalSelected.length}</span></p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Age</th>
                                                <th scope="col">Position</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {players.map(player =>
                                                <PlayerRow player={player} key={player.id} toggleSelection={toggleSelection}></PlayerRow>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


