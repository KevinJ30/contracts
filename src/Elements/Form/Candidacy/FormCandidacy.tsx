import React, { FormEvent, FormEventHandler, useContext } from "react";
import { ItemArrayContext, ItemContextType } from "../../../Pages/Candidacy/Candidacy";

export function FormCandidacy() : JSX.Element {
    const context : ItemContextType = useContext(ItemArrayContext);

    const handleSubmit : FormEventHandler<HTMLFormElement> = (event : FormEvent) => {
        event.preventDefault();

        console.log(context.state.items);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="date_depot">Date de dépôt</label>
                                    <input id={"date_depot"} type="text" className={"form-control"} placeholder={"01/01/2021"} autoFocus/>
                                </div>

                                <div className="col">
                                    <label htmlFor="date_relaunch">Date de relance</label>
                                    <input id={"date_relaunch"} type="text" className={"form-control"} placeholder={"01/01/2021"} disabled/>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="candidature_type">Type de candidature</label>
                                <select name="candidature_type" className="form-control">
                                    <option value="">Choisissez un type</option>
                                    <option value="spontane">Spontané</option>
                                    <option value="annonce">Annonce</option>
                                </select>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="business_name">Nom de l'entreprise</label>
                                <input id={"business_name"} type="text" className={"form-control"} placeholder={"Nom de l'entreprise"}/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="link">Liens vers l'annonce</label>
                                <input id={"link"} type="text" className={"form-control"} placeholder={"https://..."}/>
                            </div>

                            <button className={"btn btn-primary"}>Créer la candidature</button>
                        </form>
        </React.Fragment>
    );
}