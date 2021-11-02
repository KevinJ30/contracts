import React, { useState, useContext } from 'react';

// Type
import { candidacy as CandidacyType, CandidacyStateEnum } from '../../Pages/Candidacy/Types/CandidacyType';

// Components
import Date from '../../Components/Date';
import CandidacyState from './CandidacyState/CandidacyState';
import { ItemArrayContext, ItemContextType } from '../../Pages/Candidacy/Candidacy';
import { ButtonAction } from '../ButtonAction/ButtonAction';
import { IconDelete, IconPen } from '../../Elements/Icons/Icons';
import { CandidacyActionEnum } from '../../Pages/Candidacy/Reducer/CandidacyReducer';
import { Modal } from '../Modal/Modal';
import { FormCandidacy } from '../../Elements/Form/Candidacy/FormCandidacy';

type Props = {
    item: CandidacyType
}

export default function CandidacyItem(props: Props) : JSX.Element {
    const itemArrayContext : ItemContextType = useContext(ItemArrayContext);

    const [modalEdit, setModalEdit] = useState(false);

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
                <td>{props.item.candidacy_type.value}</td>
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

                    <Modal actionClassName={"btn btn-primary btn-sm ms-2 js-action-edit"} title="Modifier votre candidature" actionContent={<IconPen />} open={modalEdit} onClose={setModalEdit} >
                        <React.Fragment>
                            <FormCandidacy item={props.item} onCloseModal={setModalEdit}  />
                        </React.Fragment>
                    </Modal>
                </td>
            </tr>
        </React.Fragment>
    );
}