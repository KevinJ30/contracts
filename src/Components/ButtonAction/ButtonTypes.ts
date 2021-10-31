import { MouseEventHandler } from "react";

export type ButtonActionPropsType = {
    id? : string
    className? : string
    content : string|HTMLElement|JSX.Element
    onAction : MouseEventHandler<HTMLButtonElement>
}