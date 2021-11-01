import React, { useContext } from 'react';

// Type
import { candidacy as CandidacyType, CandidacyStateEnum } from '../../Pages/Candidacy/Types/CandidacyType';

// Components
import Date from '../../Components/Date';
import CandidacyState from './CandidacyState/CandidacyState';
import { ItemArrayContext, ItemContextType } from '../../Pages/Candidacy/Candidacy';
import { ButtonAction } from '../ButtonAction/ButtonAction';
import { IconDelete } from '../../Elements/Icons/Icons';
import { CandidacyActionEnum } from '../../Pages/Candidacy/Reducer/CandidacyReducer';

type Props = {
    item: CandidacyType
}

export default function CandidacyItem(props: Props) : JSX.Element {
    const itemArrayContext : ItemContextType = useContext(ItemArrayContext);

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
            case CandidacyStateEnum.edit:
                return 'table-default';
        }
    }

    return (
        <React.Fragment>
            <tr className={stateClass(props.item.status)} data-testid={"candidacy-item"}>
                <td>{props.item.candidacy_type}</td>
                <td>{props.item.business_name}</td>
                <td>{props.item.url}</td>
                <td><Date value={props.item.date_deposit} /></td>
                <td><Date value={props.item.date_deposit} /></td>
                <td><CandidacyState value={props.item.status} /></td>
                <td>
                    <ButtonAction 
                        id={"js-action-delete"}
                        className={'btn btn-danger btn-sm'} 
                        onAction={
                            () => {
                                itemArrayContext.dispatch({
                                    type: CandidacyActionEnum.DELETE,
                                    payload: [props.item]
                                }) 
                            }
                        }
                        content={<IconDelete />} 
                    />
                </td>
            </tr>
        </React.Fragment>
    );
}