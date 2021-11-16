import React, { FormEvent, FormEventHandler, useContext, useEffect, useRef } from "react";
import { ItemArrayContext, ItemContextType } from "../../../Pages/Candidacy/Candidacy";
import dayjs from 'dayjs';
import { candidacy, CandidacyStateEnum } from "../../../Pages/Candidacy/Types/CandidacyType";
import { CandidacyActionEnum } from "../../../Pages/Candidacy/Reducer/CandidacyReducer";
import { FromPropsType } from "./FormCandidacyType";

const DATE_FORMAT = 'DD-MM-YYYY';

export function FormCandidacy(props : FromPropsType) : JSX.Element {
    const context : ItemContextType = useContext(ItemArrayContext);
    const formRef : any = useRef(null);

    // Input ref
    const inputDateDepositRef : any = useRef(null);
    const inputDateRelaunchRef : any = useRef(null);
    const inputCandidacyTypeRef : any = useRef(null);
    const inputBusinessNameRef : any = useRef(null);
    const inputLinkRef : any = useRef(null);
    const inputStatusRef : any = useRef(null);

    const handleSubmit : FormEventHandler<HTMLFormElement> = (event : FormEvent) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        
        if(props.item) {
            context.dispatch({
                type: CandidacyActionEnum.EDIT,
                item : props.item,
                payload: [
                    {
                        candidacy_type: {
                            key : formData.get('candidacy_type') as string,
                            value: inputCandidacyTypeRef.current.options[inputCandidacyTypeRef.current.selectedIndex].text
                        },
                        business_name: formData.get('business_name') as string,
                        url: formData.get('link') as string,
                        date_deposit: formData.get('date_deposit') as string,
                        date_relaunch : formData.get('date_relaunch') as string,
                        status: parseInt(formData.get('candidacy_status') as string)
                    }
                ]
            })
        } else {
            context.dispatch({
                type: CandidacyActionEnum.CREATE,
                payload: [
                    {
                        candidacy_type: {
                            key : formData.get('candidacy_type') as string,
                            value: inputCandidacyTypeRef.current.options[inputCandidacyTypeRef.current.selectedIndex].text
                        },
                        business_name: formData.get('business_name') as string,
                        url: formData.get('link') as string,
                        date_deposit: formData.get('date_deposit') as string,
                        date_relaunch : formData.get('date_relaunch') as string,
                        status: CandidacyStateEnum.edit
                    }
                ]
            })
        }
        props.onCloseModal(false);
    }

    const loadInputDataWithItem = (item : candidacy) : void => {
        inputDateDepositRef.current.value = item.date_deposit;
        inputDateRelaunchRef.current.value = item.date_relaunch;
        inputCandidacyTypeRef.current.value = item.candidacy_type.key;
        inputBusinessNameRef.current.value = item.business_name;
        inputLinkRef.current.value = item.url;
        inputLinkRef.current.value = item.url;
    }

    useEffect(() => {
        if(props.item) {
            loadInputDataWithItem(props.item)
        } else {
            inputDateDepositRef.current.value = dayjs(new Date()).format(DATE_FORMAT);
            inputDateRelaunchRef.current.value = dayjs(new Date()).format(DATE_FORMAT);
        }
    }, [props.item])

    return (
        <React.Fragment>
            <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="date_deposit">Date de dépôt</label>
                                    <input ref={inputDateDepositRef} id={"date_deposit"} type="text" className={"form-control"} placeholder={"01/01/2021"} name="date_deposit" autoFocus/>
                                </div>

                                <div className="col">
                                    <label htmlFor="date_relaunch">Date de relance</label>
                                    <input ref={inputDateRelaunchRef} id={"date_relaunch"} type="text" className={"form-control"} placeholder={"01/01/2021"} name="date_relaunch" disabled={props.item ? false : true}/>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="candidature_type">Type de candidature</label>
                                <select ref={inputCandidacyTypeRef} id="candidacy_type" name="candidacy_type" className="form-control">
                                    <option value="">Choisissez un type</option>
                                    <option value="spontane">Spontané</option>
                                    <option value="annonce">Annonce</option>
                                </select>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="business_name">Nom de l'entreprise</label>
                                <input ref={inputBusinessNameRef} id={"business_name"} type="text" className={"form-control"} placeholder={"Nom de l'entreprise"} name={"business_name"}/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="link">Liens vers l'annonce</label>
                                <input ref={inputLinkRef} id={"link"} type="text" className={"form-control"} placeholder={"https://..."} name={"link"}/>
                            </div>

                            {props.item && 
                                <div className="form-group mb-3">
                                    <label htmlFor="candidacy_status">Status de la candidature</label>
                                    <select ref={inputStatusRef} id="candidacy_status" name="candidacy_status" className="form-control" defaultValue={props.item.status}>
                                        <option value={CandidacyStateEnum.edit}>Edition</option>
                                        <option value={CandidacyStateEnum.progress}>En cours</option>
                                        <option value={CandidacyStateEnum.relaunch}>Relancer</option>
                                        <option value={CandidacyStateEnum.accepted}>Accepter</option>
                                        <option value={CandidacyStateEnum.refused}>Refuser</option>
                                    </select>
                                </div>
                            }

                            <button type="submit" className={"btn btn-primary"}>
                                { props.item ? 'Modifier la candidature' : 'Créer la candidature'}
                            </button>
                        </form>
        </React.Fragment>
    );
}