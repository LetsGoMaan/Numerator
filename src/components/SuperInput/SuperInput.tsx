import React, {ChangeEvent} from "react";

type SuperInputPropsType = {
    value: number
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
}

export const SuperInput = (props: SuperInputPropsType) => {
    return (
        <>
            <input type="number" value={props.value} onChange={props.onChange}/>
        </>
    );
};
