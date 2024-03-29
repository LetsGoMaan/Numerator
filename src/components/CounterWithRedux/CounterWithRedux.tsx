import React, {useState} from "react";
import {CounterSettings} from "../CounterSettings/CounterSettings";
import {SuperButton} from "../SuperButton/SuperButton";
import {CounterStateType, setCurrentValue, setMaxValue, setStartValue} from "../../state/counterReducer";
import {AppRootState} from "../../state/store";
import {useDispatch, useSelector} from "react-redux";
import styles from "../CounterWithCombinedSettings/CounterWithCombinedSettings.module.css";
import commonStyles from '../../common/styles/CommonStyles.module.css'

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
    const dataClassName =  counter.currentValue === counter.maxValue ? styles.counterNumberMax : styles.counterNumberDefault
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
                <div className={styles.container} >
                    <div className={commonStyles.counter}>
                        <div className={commonStyles.counterDisplay}>
                            {error ? <div className={styles.textError}>Text error that Natasha wants</div> : editMode ?
                                <div className={styles.text}>Set Value that Natasha wants</div> :
                                <div className={dataClassName}>{counter.currentValue}</div> }
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
};

