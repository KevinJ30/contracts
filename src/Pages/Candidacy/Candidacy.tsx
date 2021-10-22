import React, { useEffect, useState } from 'react';

import {candidacy as CandidacyType} from './Types/CandidacyType';
import {CandidacyFaker} from "../../Data/_CandidacyFaker";
import CandidacyItem from '../../Components/Candidacy/CandidacyItem';

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
                    </tr>
                    </thead>
                    <tbody>
                    { candidacy.map((item, key) =>
                        <CandidacyItem item={item} />
                    )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
