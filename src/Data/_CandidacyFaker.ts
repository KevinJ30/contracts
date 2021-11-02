import {CandidacyStateEnum} from "../Pages/Candidacy/Types/CandidacyType";
import {candidacy as CandidacyType} from "../Pages/Candidacy/Types/CandidacyType";


export let CandidacyFakerTest: Array<CandidacyType> = [
    {
        candidacy_type: {
            key: 'annonce',
            value: 'Spontané'
        },
        business_name: "Natural Solution",
        url: "https://joudrier-kevin.fr",
        date_deposit: new Date(),
        date_relaunch: new Date(),
        status: CandidacyStateEnum.refused
    },

    {
        candidacy_type: {
            key: 'spontane',
            value: 'Spontané'
        },
        business_name: "Openclassrooms",
        url: "https://joudrier-kevin.fr",
        date_deposit: new Date(),
        date_relaunch: new Date(),
        status: CandidacyStateEnum.progress
    }
];


export let CandidacyFaker: Array<CandidacyType> = [
    {
        candidacy_type: {
            key: 'annonce',
            value: 'Annonce'
        },
        business_name: "Natural Solution",
        url: "https://joudrier-kevin.fr",
        date_deposit: new Date(),
        date_relaunch: new Date(),
        status: CandidacyStateEnum.edit
    },

    {
        candidacy_type: {
            key: 'spontane',
            value: 'Spontané'
        },
        business_name: "Openclassrooms",
        url: "https://joudrier-kevin.fr",
        date_deposit: new Date(),
        date_relaunch: new Date(),
        status: CandidacyStateEnum.refused
    },

    {
        candidacy_type: {
            key: 'spontane',
            value: 'Spontané'
        },
        business_name: "Openclassrooms",
        url: "https://joudrier-kevin.fr",
        date_deposit: new Date(),
        date_relaunch: new Date(),
        status: CandidacyStateEnum.progress
    }
];
