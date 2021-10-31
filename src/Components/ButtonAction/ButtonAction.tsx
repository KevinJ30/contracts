import { ButtonActionPropsType } from "./ButtonTypes";

export function ButtonAction(props : ButtonActionPropsType) :JSX.Element {
    return(
        <button id={props.id} className={props.className} onClick={props.onAction}>
            {props.content}
        </button>
    );
} 