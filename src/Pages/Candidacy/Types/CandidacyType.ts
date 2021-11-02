export enum CandidacyStateEnum {
    progress,
    relaunch,
    accepted,
    refused,
    edit
}

export type candidacy = {
    candidacy_type: {
        key : string,
        value : string
    },
    business_name: string,
    url:  string,
    date_deposit: Date,
    date_relaunch: Date,
    status: number
}
