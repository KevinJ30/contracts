import React, { useEffect, useState } from 'react';

import {candidacy as CandidacyType} from './Types/CandidacyType';
import {CandidacyFaker} from "../../Data/_CandidacyFaker";

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
                        <tr key={key}>
                            <td>
                                {item.candidacy_type}
                            </td>

                            <td>
                                {item.business_name}
                            </td>

                            <td>
                                <a href={item.url} target={"_blank"}>{item.url}</a>
                            </td>

                            <td>
                                {item.date_deposit.getDate()}
                            </td>

                            <td>
                                {item.date_relaunch.getDate()}
                            </td>

                            <td>
                                {item.status}
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
