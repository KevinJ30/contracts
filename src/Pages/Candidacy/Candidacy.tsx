import React, { useEffect, useState } from 'react';

import {candidacy, candidacy as CandidacyType} from './Types/CandidacyType';
import {CandidacyFaker} from "../../Data/_CandidacyFaker";
import CandidacyItem from '../../Components/Candidacy/CandidacyItem';
import { Modal } from '../../Components/Modal/Modal';

export type ItemContextType = {
    items: Array<candidacy>|[],
    setItems: Function|null
}

export const defaultItemContext : ItemContextType = {
    items: [],
    setItems: null
};

export const ItemArrayContext = React.createContext<ItemContextType>(defaultItemContext);

export default function Candidacy() : JSX.Element {
    const [candidacy, setCandidacy] = useState<CandidacyType[]>([])

    useEffect(() => {
        setCandidacy(CandidacyFaker);
    }, [])

    return (
        <main className={"page page-candidacy"}>
            <div className="container">
                <h1>Toutes vos candidatures</h1>
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
                        <ItemArrayContext.Provider value={
                            {
                                items : candidacy,
                                setItems: setCandidacy
                            }
                        }>
                            { candidacy.map(
                                (item, key) =>
                                    
                                    <CandidacyItem key={key}  item={item} />
                                )
                            }
                        </ItemArrayContext.Provider>
                    </tbody>
                </table>
            </div>

            <Modal title={"Ma super Modal"} actionContent={"Ouvrire la modal"} actionClassName="btn btn-primary">
                <div className="container">
                    <h1>Ma super Modal</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eveniet minima cupiditate dicta molestiae delectus itaque nulla? Sequi, praesentium natus esse tempora dolorum quibusdam numquam nobis voluptatibus libero, harum aliquam officiis, dolore dolor recusandae ex possimus blanditiis consectetur odio voluptas!</p>
                </div>
            </Modal>
        </main>
    );
}
