import React, {useState} from "react";
import {CounterSettings} from "../CounterSettings/CounterSettings";
import {SuperButton} from "../SuperButton/SuperButton";
import styles from './CounterWithCombinedSettings.module.css'
import commonStyles from '../../common/styles/CommonStyles.module.css'

const CounterWithCombinedSettings = () => {

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
    const dataClassName =  counter === maxValue ? styles.counterNumberMax : styles.counterNumberDefault
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
                <div className={styles.container} >
                    <div className={commonStyles.counter}>
                        <div className={commonStyles.counterDisplay}>
                            {error ? <div className={styles.textError}>Text error that Natasha wants</div> : editMode ?
                                <div className={styles.text}>Set Value that Natasha wants</div> :
                                <div className={dataClassName}>{counter}</div> }
                        </div>
                        <div className={commonStyles.buttons}>
                            <SuperButton className={commonStyles.incButton} name={'Inc'} disabled={incDisabled} onClick={incCounter}/>
                            <SuperButton className={commonStyles.resetButton} name={'Reset'} disabled={resDisabled} onClick={resCounter}/>
                            <SuperButton className={commonStyles.setButton} name={'Set'} disabled={error} onClick={changeEditMode}/>
                            {/*<button disabled={incDisabled} onClick={incCounter}>Inc</button>*/}
                            {/*<button disabled={resDisabled} onClick={resCounter}>Reset</button>*/}
                            {/*<button disabled={error} onClick={changeEditMode}>Set</button>*/}
                        </div>

                    </div>
                </div>

            }
        </>
    )
}

export default CounterWithCombinedSettings;


