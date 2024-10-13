import { Players } from "../lib/definitions"

export default function PlayerRow({ player, toggleSelection }: { player: Players, toggleSelection: (player: Players) => void; }) {
    return (
        <>
            <tr>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{player.age}</td>
                <td>{player.position}</td>
                <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => toggleSelection(player)} />
                        <label className="form-check-label" form="flexCheckDefault">
                            Add to the team
                        </label>
                    </div>
                </td>
            </tr>
        </>
    )
}