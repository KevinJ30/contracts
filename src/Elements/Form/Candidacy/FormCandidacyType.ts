import { candidacy } from "../../../Pages/Candidacy/Types/CandidacyType";

export type FromPropsType = {
    onCloseModal: React.Dispatch<React.SetStateAction<boolean>>,
    item ?: candidacy
};