import React from "react";

type SuperButtonPropsType = {
    onClick: () => void
    disabled: boolean
    name: string
    className?: string
}

export const SuperButton = (props: SuperButtonPropsType) => {
    return (
        <>
            <button className={props.className} onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
        </>
    );
};

