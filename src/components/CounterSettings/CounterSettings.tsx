import React, {ChangeEvent} from "react";
import {SuperInput} from "../SuperInput/SuperInput";
import {SuperButton} from "../SuperButton/SuperButton";
import styles from "./CounterSettings.module.css"
import commonStyles from '../../common/styles/CommonStyles.module.css'
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
            <div className={styles.wrapper}>
                <div className={commonStyles.counter}>
                    <div className={commonStyles.counterDisplay}>
                        <div className={styles.texts}>
                            <div className={styles.text}>max value:</div>
                            <div className={styles.text}>start value:</div>
                        </div>
                        <div className={styles.inputs}>
                            <SuperInput className={props.startValue >= props.maxValue ? styles.inpError : styles.inp} value={props.maxValue} onChange={onChangeMaxValue}/>
                            <SuperInput className={props.startValue >= props.maxValue || props.startValue < 0 ? styles.inpError : styles.inp} value={props.startValue} onChange={onChangeStartValue}/>
                        </div>
                    </div>
                    <div className={commonStyles.buttons}>
                        <SuperButton className={commonStyles.setButton} onClick={props.changeEditMode} disabled={props.error} name={"Set"}/>
                        {/*<button disabled={props.error} onClick={props.changeEditMode}>Set</button>*/}
                        {/*<span>max value: <input type="number" value={props.maxValue} onChange={onChangeMaxValue}/></span>*/}
                        {/*<span>start value: <input type="number" value={props.startValue} onChange={onChangeStartValue}/></span>*/}
                    </div>

                </div>
            </div>
        </>
    )
};

