import React, { FormEvent, FormEventHandler, MutableRefObject, useContext, useEffect, useRef } from "react";
import { ItemArrayContext, ItemContextType } from "../../../Pages/Candidacy/Candidacy";
import dayjs from 'dayjs';
import { CandidacyStateEnum } from "../../../Pages/Candidacy/Types/CandidacyType";
import { CandidacyActionEnum } from "../../../Pages/Candidacy/Reducer/CandidacyReducer";

type PropsType = {
    onCloseModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function FormCandidacy(props : PropsType) : JSX.Element {
    const context : ItemContextType = useContext(ItemArrayContext);
    const formRef : any = useRef(null);

    const handleSubmit : FormEventHandler<HTMLFormElement> = (event : FormEvent) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        console.log(formData.get('candidacy_type'))
        context.dispatch({
            type: CandidacyActionEnum.CREATE,
            payload: [
                {
                    candidacy_type: formData.get('candidacy_type') as string,
                    business_name: formData.get('business_name') as string,
                    url: formData.get('link') as string,
                    date_deposit: new Date(formData.get('date_deposit') as string),
                    date_relaunch : new Date(formData.get('date_relaunch') as string),
                    status: CandidacyStateEnum.edit
                }
            ]
        })

        props.onCloseModal(false);
    }

    useEffect(() => {
        const dateDepotInput : HTMLInputElement = formRef.current.querySelector('#date_deposit');
        const date = new Date();
        
        dateDepotInput.value = dayjs(date).format('DD-MM-YYYY');
    }, [])

    return (
        <React.Fragment>
            <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="date_deposit">Date de dépôt</label>
                                    <input id={"date_deposit"} type="text" className={"form-control"} placeholder={"01/01/2021"} name="date_deposit" autoFocus/>
                                </div>

                                <div className="col">
                                    <label htmlFor="date_relaunch">Date de relance</label>
                                    <input id={"date_relaunch"} type="text" className={"form-control"} placeholder={"01/01/2021"} name="date_relaunch" disabled/>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="candidature_type">Type de candidature</label>
                                <select name="candidacy_type" className="form-control">
                                    <option value="">Choisissez un type</option>
                                    <option value="spontane">Spontané</option>
                                    <option value="annonce">Annonce</option>
                                </select>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="business_name">Nom de l'entreprise</label>
                                <input id={"business_name"} type="text" className={"form-control"} placeholder={"Nom de l'entreprise"} name={"business_name"}/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="link">Liens vers l'annonce</label>
                                <input id={"link"} type="text" className={"form-control"} placeholder={"https://..."} name={"link"}/>
                            </div>

                            <button type="submit" className={"btn btn-primary"}>Créer la candidature</button>
                        </form>
        </React.Fragment>
    );
}