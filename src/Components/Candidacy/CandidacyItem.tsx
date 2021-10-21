import React from 'react';

// Type
import { candidacy as CandidacyType } from '../../Pages/Candidacy/Types/CandidacyType';

// Components
import Date from '../../Components/Date';

type Props = {
    item: CandidacyType
}

export default function CandidacyItem(props: Props) : JSX.Element {
    
    return (
        <React.Fragment>
            <tr>
                <td>{props.item.candidacy_type}</td>
                <td>{props.item.business_name}</td>
                <td>{props.item.url}</td>
                <td><Date value={props.item.date_deposit} /></td>
                <td><Date value={props.item.date_deposit} /></td>
                <td>{props.item.status}</td>
            </tr>
        </React.Fragment>
    );
}