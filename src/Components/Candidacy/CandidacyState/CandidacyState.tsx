import React, {useEffect} from 'react';
import { IconHourglass, IconDone, IconDelete } from '../../../Elements/Icons/Icons';
import {CandidacyStateEnum} from "../../../Pages/Candidacy/Types/CandidacyType";

type Props = {
    value: number
}

/**
 * Composant Candidacy State
 * 
 * Etat
 * ----
 * 
 * - progress
 * - relaunch
 * - refused
 * - accepted
 **/

export default function CandidacyState(props: Props) : JSX.Element {
    useEffect(() => {
        if(props.value < 0 || props.value > 3) {
            throw new Error('Le state ne peut pas être compris dans cette valeur');
        }
    })

    let determinedState = (state: CandidacyStateEnum) : JSX.Element => {

        switch(state) {
            case CandidacyStateEnum.progress:
                return <IconHourglass />;
            case CandidacyStateEnum.relaunch:
                return <IconHourglass />;
            case CandidacyStateEnum.accepted:
                return <IconDone />;
            case CandidacyStateEnum.refused:
                return <IconDelete />;
        }
    }

    return (
        <React.Fragment>
            <span>{ determinedState(props.value) }</span>
        </React.Fragment>
    );
}
