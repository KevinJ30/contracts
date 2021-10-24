import React, {useEffect} from 'react';
import { IconHourglass, IconDone, IconDelete, IconPen } from '../../../Elements/Icons/Icons';
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
        if(props.value < 0 || props.value > 4) {
            throw new Error('Le state ne peut pas être compris dans cette valeur');
        }
    })

    let determinedState = (state: CandidacyStateEnum) : JSX.Element => {

        switch(state) {
            case CandidacyStateEnum.progress:
                return <div className="state state-progress">
                    <IconHourglass />
                </div>
            case CandidacyStateEnum.relaunch:
                return <div className="state state-progress">
                    <IconHourglass />
                </div>
            case CandidacyStateEnum.accepted:
                return <div className="state state-accepted">
                    <IconDone />
                </div>
            case CandidacyStateEnum.refused:
                return <div className="state state-refused">
                    <IconDelete />
                </div>
            case CandidacyStateEnum.edit:
                return <div className="state state-edit">
                <IconPen />
            </div>
        }
    }

    return (
        <React.Fragment>
            <span>{ determinedState(props.value) }</span>
        </React.Fragment>
    );
}
