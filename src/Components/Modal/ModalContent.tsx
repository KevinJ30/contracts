import React, {useCallback, useEffect} from "react";
import { ModalContentPropsType } from "./ModalType";

export function ModalContent(props : ModalContentPropsType) {
    const styles = {
        display : 'block'
    }

    const onEscape = useCallback((event) => {
        if(event.key === "Escape") {
            props.onClose()
        }
    }, [props])

    useEffect(() => {
        document.addEventListener('keyup', onEscape);
        
        return () => {
            document.removeEventListener('keyup', onEscape)
        }
    }, [onEscape])

    return (
        <React.Fragment>
            <div className="modal" style={styles} aria-modal="true">
                <div className="modal-dialog modal-fade">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {props.onClose()}}></button>
                    </div>
                    <div className="modal-body">
                        {props.content}
                    </div>
                    </div>
                </div>
                </div>
        </React.Fragment>
    );
}