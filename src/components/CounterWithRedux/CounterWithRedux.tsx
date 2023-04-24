import React, {useState} from "react";
import {CounterSettings} from "../CounterSettings/CounterSettings";
import {SuperButton} from "../SuperButton/SuperButton";
import {CounterStateType, setCurrentValue, setMaxValue, setStartValue} from "../../state/counterReducer";
import {AppRootState} from "../../state/store";
import {useDispatch, useSelector} from "react-redux";

export const CounterWithRedux = () => {

    const dispatch = useDispatch()
    const counter = useSelector<AppRootState, CounterStateType>(state => state.counter)

    const [editMode, setEditMode] = useState(false)

    const incCounter = () => {
        dispatch(setCurrentValue(counter.currentValue + 1))
    }
    const resCounter = () => {
        dispatch(setCurrentValue(counter.startValue))
    }
    const changeEditMode = () => {
        setEditMode(!editMode)
        dispatch(setCurrentValue(counter.startValue))
    }
    const changeMaxValue = (newMaxValue: number) => {
        dispatch(setMaxValue(newMaxValue))
    }
    const changeStartValue = (newStartValue: number) => {
        dispatch(setStartValue(newStartValue))
    }

    const error = counter.startValue < 0 || counter.maxValue <= counter.startValue
    const resDisabled = counter.currentValue === counter.startValue
    const incDisabled = counter.currentValue === counter.maxValue

    return (
        <>
            {editMode
                ?
                <CounterSettings
                    startValue={counter.startValue}
                    maxValue={counter.maxValue}
                    error={error}
                    changeStartValue={changeStartValue}
                    changeMaxValue={changeMaxValue}
                    changeEditMode={changeEditMode}/>
                // <div>
                //     <span>max value: <input type="number" value={maxValue} onChange={changeMaxValue}/></span>
                //     <span>start value: <input type="number" value={startValue} onChange={changeStartValue}/></span>
                //     <button disabled={error} onClick={changeEditMode}>Set</button>
                // </div>
                :
                <div>
                    {counter.currentValue}
                    <SuperButton name={'Inc'} disabled={incDisabled} onClick={incCounter}/>
                    <SuperButton name={'Reset'} disabled={resDisabled} onClick={resCounter}/>
                    <SuperButton name={'Set'} disabled={error} onClick={changeEditMode}/>
                    {/*<button disabled={incDisabled} onClick={incCounter}>Inc</button>*/}
                    {/*<button disabled={resDisabled} onClick={resCounter}>Reset</button>*/}
                    {/*<button disabled={error} onClick={changeEditMode}>Set</button>*/}
                </div>
            }
        </>
    )
};

