import React from "react";

export default function CreateTeamForm({ name, slogan, onNameChange, onDescriptionChange, onCreateTeam }: { name: string, slogan: string, onNameChange: React.ChangeEventHandler<HTMLInputElement>, onDescriptionChange: React.ChangeEventHandler<HTMLInputElement>, onCreateTeam: React.FormEventHandler<HTMLFormElement> }) {

    return (
        <>
            <div className="row justify-content-center mt-4">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            Add Team
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <form onSubmit={onCreateTeam} className="row g-3 align-items-center" >
                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                value={name}
                                                name="name"
                                                onChange={onNameChange}

                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="description" className="form-label">Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="description"
                                                value={slogan}
                                                name="description"
                                                onChange={onDescriptionChange}
                                            />
                                        </div>
                                        <div className="col-md-2 d-flex align-items-end">
                                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



