import React, {ChangeEvent} from "react";

type SuperInputPropsType = {
    value: number
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export const SuperInput = (props: SuperInputPropsType) => {
    return (
        <>
            <input className={props.className} type="number" value={props.value} onChange={props.onChange}/>
        </>
    );
};
