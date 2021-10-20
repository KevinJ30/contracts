import React from 'react';
import dayjs from "dayjs";

type DateProps = {
    value: Date
}

export default function DateFormat(props : DateProps) {
    // const [date, setDate] = useState<string>('')
    const date = dayjs(props.value).format("DD-MM-YYYY");

    return (
        <React.Fragment>
            {date}
        </React.Fragment>
    )
}
