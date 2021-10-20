import React from 'react';
import {CandidacyStateEnum} from "../Pages/Candidacy/Types/CandidacyType";

type Props = {
    value: number
}

export default function CandidacyState(props: Props) {
    let determinedState = (state: CandidacyStateEnum) : string => {

        switch(state) {
            case CandidacyStateEnum.progress:
                return 'En cours'
            case CandidacyStateEnum.relaunch:
                return 'Relancé';
            case CandidacyStateEnum.accepted:
                return 'Accepté';
            case CandidacyStateEnum.refused:
                return 'Refusé';
        }
    }

    return (
        <React.Fragment>
            <span>{ determinedState(props.value) }</span>
        </React.Fragment>
    );
}
