export enum CandidacyStateEnum {
    progress,
    relaunch,
    accepted,
    refused
}

export type candidacy = {
    candidacy_type: string,
    business_name: string,
    url: string,
    date_deposit: Date,
    date_relaunch: Date,
    status: number
}
