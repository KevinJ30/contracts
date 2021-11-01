import React, { KeyboardEventHandler, MouseEventHandler, ReactChildren, ReactElement } from "react";

export type ModalPropsType = {
    title : string,
    actionContent : HTMLElement | string
    actionClassName? : string,
    children : ReactElement<ReactChildren>,
    open : boolean,
    onClose : React.Dispatch<React.SetStateAction<boolean>>
}

export type ModalContentPropsType = {
    onClose: Function,
    title: string,
    content: JSX.Element
}