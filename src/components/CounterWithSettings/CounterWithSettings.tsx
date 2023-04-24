import React, {useState} from "react";
import Counter from "../Counter/Counter";
import {CounterSettings} from "../CounterSettings/CounterSettings";

export const CounterWithSettings = () => {
    const [counter, setCounter] = useState(0)
    const [editMode, setEditMode] = useState(false)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(3)

    const changeEditMode = () => {
        setEditMode(!editMode)
        setCounter(startValue)
    }
    const changeMaxValue = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
    }
    const changeStartValue = (newStartValue: number) => {
        setStartValue(newStartValue)
    }

    const error = startValue < 0 || maxValue <= startValue


    return (
        <>
            <Counter/>
            <CounterSettings
                startValue={startValue}
                maxValue={maxValue}
                error={error}
                changeStartValue={changeStartValue}
                changeMaxValue={changeMaxValue}
                changeEditMode={changeEditMode}/>
        </>
    );
};

