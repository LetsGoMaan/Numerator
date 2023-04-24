import React, {useState} from "react";
import {CounterSettings} from "../CounterSettings/CounterSettings";
import styles from "./CounterWithSettings.module.css"
import {Counter} from "../Counter/Counter";

export const CounterWithSettings = () => {
    const [counter, setCounter] = useState(0)
    const [editMode, setEditMode] = useState(false)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(3)

    const incCounter = (newCurrentValue: number) => {
        setCounter(newCurrentValue)
    }
    const resCounter = () => {
        setCounter(0)
    }

    const changeEditMode = () => {
        setEditMode(!editMode)
        setCounter(startValue)
    }
    const changeMaxValue = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
        if (!editMode) setEditMode(true)
    }
    const changeStartValue = (newStartValue: number) => {
        setStartValue(newStartValue)
        if (!editMode) setEditMode(true)
    }

    const error = startValue < 0 || maxValue <= startValue


    return (
        <>
            <div className={styles.container}>
                <Counter
                counter={counter}
                incCounter = {incCounter}
                resCounter = {resCounter}
                startValue={startValue}
                maxValue={maxValue}
                editMode={editMode}
                error={error}
                />
                <CounterSettings
                    startValue={startValue}
                    maxValue={maxValue}
                    error={error}
                    changeStartValue={changeStartValue}
                    changeMaxValue={changeMaxValue}
                    changeEditMode={changeEditMode}/>
            </div>

        </>
    );
};

