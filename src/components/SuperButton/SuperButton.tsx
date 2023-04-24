import React from "react";

type SuperButtonPropsType = {
    onClick: () => void
    disabled: boolean
    name: string
}

export const SuperButton = (props: SuperButtonPropsType) => {
    return (
        <>
            <button onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
        </>
    );
};

