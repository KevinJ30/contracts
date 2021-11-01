import React from 'react';
import { createPortal } from 'react-dom';
import { ModalContent } from './ModalContent';
import { ModalPropsType } from "./ModalType";

export function Modal(props : ModalPropsType) {
    const modalRootElement = document.querySelector('#root-modal');

    const setOpen = (state : boolean) => {
        props.onClose(!state);
    }

    const handleToggleModal = () => {
        setOpen(props.open);
    }

    const closeModal = () => {
        const modal = document.querySelector('.modal-dialog');

        modal?.classList.add('modal-fade-close');
        modal?.addEventListener('animationend', () => {
            setOpen(props.open)
        });
    }
    
    return (
        <React.Fragment>
            <button className={props.actionClassName} onClick={handleToggleModal}>{props.actionContent}</button>

            { props.open && modalRootElement && createPortal( <React.Fragment >
                    <ModalContent onClose={closeModal} content={props.children} title={props.title} />
                </React.Fragment>,
                modalRootElement
            )}
        </React.Fragment>
    );
}