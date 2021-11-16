import React from 'react';
import dayjs from "dayjs";

export const DATE_FORMAT = "DD/MM/YYYY";

type DateProps = {
    value: Date
}

export default function DateFormat(props : DateProps) {
    const date = dayjs(props.value).format(DATE_FORMAT);
    return (
        <React.Fragment>
            {date}
        </React.Fragment>
    )
}
