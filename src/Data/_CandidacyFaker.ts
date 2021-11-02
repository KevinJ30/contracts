import dayjs from "dayjs";
import {CandidacyStateEnum} from "../Pages/Candidacy/Types/CandidacyType";
import {candidacy as CandidacyType} from "../Pages/Candidacy/Types/CandidacyType";

const DATE_FORMAT = 'DD/MM/YYYY';

export let CandidacyFakerTest: Array<CandidacyType> = [
    {
        candidacy_type: {
            key: 'annonce',
            value: 'Spontané'
        },
        business_name: "Natural Solution",
        url: "https://joudrier-kevin.fr",
        date_deposit: dayjs(new Date()).format(DATE_FORMAT),
        date_relaunch: dayjs(new Date()).format(DATE_FORMAT),
        status: CandidacyStateEnum.refused
    },

    {
        candidacy_type: {
            key: 'spontane',
            value: 'Spontané'
        },
        business_name: "Openclassrooms",
        url: "https://joudrier-kevin.fr",
        date_deposit: dayjs(new Date()).format(DATE_FORMAT),
        date_relaunch: dayjs(new Date()).format(DATE_FORMAT),
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
        date_deposit: dayjs(new Date()).format(DATE_FORMAT),
        date_relaunch: dayjs(new Date()).format(DATE_FORMAT),
        status: CandidacyStateEnum.edit
    },

    {
        candidacy_type: {
            key: 'spontane',
            value: 'Spontané'
        },
        business_name: "Openclassrooms",
        url: "https://joudrier-kevin.fr",
        date_deposit: dayjs(new Date()).format(DATE_FORMAT),
        date_relaunch: dayjs(new Date()).format(DATE_FORMAT),
        status: CandidacyStateEnum.refused
    },

    {
        candidacy_type: {
            key: 'spontane',
            value: 'Spontané'
        },
        business_name: "Openclassrooms",
        url: "https://joudrier-kevin.fr",
        date_deposit: dayjs(new Date()).format(DATE_FORMAT),
        date_relaunch: dayjs(new Date()).format(DATE_FORMAT),
        status: CandidacyStateEnum.progress
    }
];
