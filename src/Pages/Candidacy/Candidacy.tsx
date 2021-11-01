import React, { useEffect, useReducer, useState } from 'react';

import CandidacyItem from '../../Components/Candidacy/CandidacyItem';
import { Modal } from '../../Components/Modal/Modal';
import { CandidacyFaker } from '../../Data/_CandidacyFaker';
import { FormCandidacy } from '../../Elements/Form/Candidacy/FormCandidacy';
import { CandidacyAction, CandidacyActionEnum, CandidacyReducer, CandidacyState } from './Reducer/CandidacyReducer';
import { candidacy } from './Types/CandidacyType';

export type ItemContextType = {
    state : CandidacyState,
    dispatch: React.Dispatch<CandidacyAction>
}

export const defaultDispatchFunction = () : null => null;

export const defaultItemContext : ItemContextType = {
    state: {
        items : []
    },
    dispatch: defaultDispatchFunction
};

export const ItemArrayContext = React.createContext<ItemContextType>(defaultItemContext);

export default function Candidacy() : JSX.Element {
    const [state, dispatch] = useReducer(CandidacyReducer, {items: []});
    const [stateModal, setStateModal] = useState(false);

    useEffect(() => {
        dispatch({
            type: CandidacyActionEnum.STORE,
            payload: CandidacyFaker
        });
    }, [])

    return (
        <main className={"page page-candidacy"}>
            <ItemArrayContext.Provider value={
                            {
                                state : state,
                                dispatch: dispatch
                            }
                        }>

                <div className="container">
                    <h1>Toutes vos candidatures</h1>
                    
                    <Modal actionClassName={"btn btn-primary"} title="Ma modal" actionContent="Ajouter une candidature" open={stateModal} onClose={setStateModal} >
                        <React.Fragment>
                            <h2>Créer votre candidature</h2>

                            <FormCandidacy onCloseModal={setStateModal}  />
                        </React.Fragment>
                    </Modal>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th>Type de candidature</th>
                            <th>Nom de l'entrepise</th>
                            <th>Lien vers l'annonce</th>
                            <th>Date de dépôt</th>
                            <th>Date de relance</th>
                            <th>État</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                                { state.items.map(
                                    (item : candidacy, key : number) =>
                                        
                                        <CandidacyItem key={key}  item={item} />
                                    )
                                }
                        </tbody>
                    </table>
                </div>
            </ItemArrayContext.Provider>
        </main>
    );
}
