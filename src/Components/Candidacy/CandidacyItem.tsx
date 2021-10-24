import React from 'react';

// Type
import { candidacy as CandidacyType, CandidacyStateEnum } from '../../Pages/Candidacy/Types/CandidacyType';

// Components
import Date from '../../Components/Date';
import CandidacyState from './CandidacyState/CandidacyState';
import CandidacyActions from '../../Pages/Candidacy/CandidacyActions';

type Props = {
    item: CandidacyType
}

export default function CandidacyItem(props: Props) : JSX.Element {
    
    const stateClass = (status : CandidacyStateEnum) : string => {
        switch(status) {
            case CandidacyStateEnum.progress:
                return 'table-primary';
            case CandidacyStateEnum.relaunch:
                return 'table-primary';
            case CandidacyStateEnum.refused:
                return 'table-danger'
            case CandidacyStateEnum.accepted:
                return 'table-success';
            default:
                return '';
        }
    }

    return (
        <React.Fragment>
            <tr className={stateClass(props.item.status)}>
                <td>{props.item.candidacy_type}</td>
                <td>{props.item.business_name}</td>
                <td>{props.item.url}</td>
                <td><Date value={props.item.date_deposit} /></td>
                <td><Date value={props.item.date_deposit} /></td>
                <td><CandidacyState value={props.item.status} /></td>
                <td><CandidacyActions item={props.item} /></td>
            </tr>
        </React.Fragment>
    );
}