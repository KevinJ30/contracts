import { ItemContextType } from "../Pages/Candidacy/Candidacy";
import { candidacy } from "../Pages/Candidacy/Types/CandidacyType";

/**
 * Supprime une candidature de l'état
 * 
 * @param contextCandidacy State géneral des candidature
 * @param candidacy Candidature a supprimer
 **/
export const deleteCandidacy = (contextCandidacy : ItemContextType, candidacy : candidacy) : void => {
    const itemsArray = contextCandidacy.items.filter(item => item !== candidacy);
    contextCandidacy.setItems(itemsArray);
}