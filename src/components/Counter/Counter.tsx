import React, {useState} from "react";
import {CounterSettings} from "../CounterSettings/CounterSettings";
import {SuperButton} from "../SuperButton/SuperButton";


const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [editMode, setEditMode] = useState(false)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(3)

    const incCounter = () => {
        setCounter(counter + 1)
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
    }
    const changeStartValue = (newStartValue: number) => {
        setStartValue(newStartValue)
    }

    const error = startValue < 0 || maxValue <= startValue
    const resDisabled = counter === startValue
    const incDisabled = counter === maxValue

    return (
        <>
            {editMode
                ?
                <CounterSettings
                startValue={startValue}
                maxValue={maxValue}
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
                    {counter}
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
}

export default Counter;
