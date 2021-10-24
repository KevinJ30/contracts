import React, {useContext } from "react";
import { IconDelete } from "../../Elements/Icons/Icons";
import { ItemArrayContext, ItemContextType } from "./Candidacy";
import { candidacy } from "./Types/CandidacyType";

type Props = {
    item: candidacy
}

/**
 * Suprime un élément dans le state candidacy
 * 
 * @param props 
 * @param child 
 * @returns 
 */
function DeleteAction(props : Props) {
    const itemArrayContext : ItemContextType = useContext(ItemArrayContext)

    const handleDelete = () => {
        const itemsArray = itemArrayContext.items.filter(item => props.item !== item);
        itemArrayContext.setItems(itemsArray);
    } 

    return (
        <React.Fragment>
            <button className="btn btn-danger btn-sm" onClick={handleDelete}><IconDelete /></button>
        </React.Fragment>
    );
}

/**
 * COntient les actions
 * @param props 
 **/
export default function CandidacyActions(props : Props) {
    return (
        <React.Fragment>
            <DeleteAction item={props.item} />
        </React.Fragment>
    );
}