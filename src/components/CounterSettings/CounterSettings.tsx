import React, {ChangeEvent} from "react";
import {SuperInput} from "../SuperInput/SuperInput";
import {SuperButton} from "../SuperButton/SuperButton";

type CounterSettingsPropsType = {
    maxValue: number
    startValue: number
    error: boolean
    changeMaxValue: (newMaxValue: number) => void
    changeStartValue: (newStartValue: number) => void
    changeEditMode: () => void

}

export const CounterSettings = (props: CounterSettingsPropsType) => {

    const onChangeMaxValue = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+e.currentTarget.value)
    }
    const onChangeStartValue = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(+e.currentTarget.value)
    }

    return (
        <>
            <div>
                <span>max value: <SuperInput value={props.maxValue} onChange={onChangeMaxValue}/></span>
                <span>start value: <SuperInput value={props.startValue} onChange={onChangeStartValue}/></span>
                <SuperButton onClick={props.changeEditMode} disabled={props.error} name={"Set"}/>
                {/*<button disabled={props.error} onClick={props.changeEditMode}>Set</button>*/}
                {/*<span>max value: <input type="number" value={props.maxValue} onChange={onChangeMaxValue}/></span>*/}
                {/*<span>start value: <input type="number" value={props.startValue} onChange={onChangeStartValue}/></span>*/}
            </div>
        </>
    )
};

