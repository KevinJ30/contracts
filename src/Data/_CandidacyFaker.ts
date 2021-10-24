import {CandidacyStateEnum} from "../Pages/Candidacy/Types/CandidacyType";
import {candidacy as CandidacyType} from "../Pages/Candidacy/Types/CandidacyType";


export let CandidacyFaker: Array<CandidacyType> = [
    {
        candidacy_type: "spontané",
        business_name: "Natural Solution",
        url: "https://joudrier-kevin.fr",
        date_deposit: new Date(),
        date_relaunch: new Date(),
        status: CandidacyStateEnum.edit
    },

    {
        candidacy_type: "spontané",
        business_name: "Openclassrooms",
        url: "https://joudrier-kevin.fr",
        date_deposit: new Date(),
        date_relaunch: new Date(),
        status: CandidacyStateEnum.progress
    },

    {
        candidacy_type: "spontané",
        business_name: "Openclassrooms",
        url: "https://joudrier-kevin.fr",
        date_deposit: new Date(),
        date_relaunch: new Date(),
        status: CandidacyStateEnum.refused
    }
];
