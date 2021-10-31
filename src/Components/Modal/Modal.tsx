import React, {useState} from 'react';
import { createPortal } from 'react-dom';
import { ModalContent } from './ModalContent';
import { ModalPropsType } from "./ModalType";

export function Modal(props : ModalPropsType) {
    const [open, setOpen] = useState(false);
    const modalRootElement = document.querySelector('#root-modal');

    const handleToggleModal = () => {
        setOpen(!open);
    }

    const closeModal = () => {
        const modal = document.querySelector('.modal-dialog');

        modal?.classList.add('modal-fade-close');
        modal?.addEventListener('animationend', () => {
            setOpen(false)
        });
    }
    
    return (
        <React.Fragment>
            <button className={props.actionClassName} onClick={handleToggleModal}>{props.actionContent}</button>

            { open && modalRootElement && createPortal( <React.Fragment >
                    <ModalContent onClose={closeModal} content={props.children} title={props.title} />
                </React.Fragment>,
                modalRootElement
            )}
        </React.Fragment>
    );
}