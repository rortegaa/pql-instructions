import { Teams } from "../lib/definitions";

export default function TeamsList({ data }: { data: Teams[] }) {
    return (
        <>
            <div className="row justify-content-center mt-4">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            List of teams
                        </div>
                        <div className="card-body">
                            <ol className="list-group list-group-numbered">
                                {data.map(team =>
                                    <li key={team.id} className="list-group-item">{team.name}</li>
                                )}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}