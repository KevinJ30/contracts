import { candidacy } from "../Types/CandidacyType";

export enum CandidacyActionEnum {
    CREATE = 'create',
    STORE = 'store',
    DELETE = 'delete',
    EDIT = 'edit'
}

export type CandidacyState = {
    items : candidacy[]
}

export type CandidacyAction = {
    type: CandidacyActionEnum,
    payload : candidacy[],
    item ?: candidacy
}

/**
 * Reducer state candidacy 
 **/
export function CandidacyReducer(state : CandidacyState, action : CandidacyAction) {

    switch(action.type) {
        case CandidacyActionEnum.CREATE:
                return {
                    ...state,
                    items: [...state.items, ...action.payload] 
                };
        case CandidacyActionEnum.STORE:
            return {
                ...state,
                items: action.payload
            };    
        case CandidacyActionEnum.EDIT:
            const newEditList = state.items.map(function(itemIterator) {
                if(itemIterator === action.item) {
                    return action.payload[0];
                }

                return itemIterator;
            })    
        
            return {
                ...state,
                items: newEditList
            }

        case CandidacyActionEnum.DELETE:
            const newItemsList = state.items.filter(item => action.payload[0] !== item);

            return {
                ...state,
                items: newItemsList
            }

        default :
            return state;
    }

}