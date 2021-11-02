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
    date_deposit : String,
    date_relaunch : String,
    status: number
}
