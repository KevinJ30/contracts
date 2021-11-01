import React, {useState} from 'react';
import { Modal } from './Modal';

export function ModalEntryTest() : JSX.Element {
    const [stateModal, setStateModal] = useState(false);

    return (
        <React.Fragment>
            <Modal title="my modal" actionContent="ouvrire la modal" open={stateModal} onClose={setStateModal}>
                <React.Fragment>
                    <h1>My Modal Test</h1>
                    <p>My modal testing with application</p>
                </React.Fragment>
            </Modal>   
            <div id="root-modal"></div>
        </React.Fragment>
    );
}