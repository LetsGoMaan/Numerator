import React from "react";
import {SuperButton} from "../SuperButton/SuperButton";
import styles from "../CounterWithCombinedSettings/CounterWithCombinedSettings.module.css"
import commonStyles from '../../common/styles/CommonStyles.module.css'

type CounterPropsType = {
    counter: number
    incCounter: (newCurrentValue: number) => void
    resCounter: () => void
    startValue: number
    maxValue: number
    editMode: boolean
    error: boolean
}


export const Counter = (props: CounterPropsType) => {



    const onClickIncHandler = () => {
        props.incCounter(props.counter + 1)
    }
    const onClickResHandler = () => {
        props.resCounter()
    }

    const error = props.startValue < 0 || props.maxValue <= props.startValue
    const resDisabled = props.counter === props.startValue || props.error
    const incDisabled = props.counter === props.maxValue || props.error
    const dataClassName =  props.counter === props.maxValue ? styles.counterNumberMax : styles.counterNumberDefault
    return (
        <>
            <div className={styles.container} >
                <div className={commonStyles.counter}>
                    <div className={commonStyles.counterDisplay}>
                        {error ? <div className={styles.textError}>Text error that Natasha wants</div> : props.editMode ?
                            <div className={styles.text}>Set Value that Natasha wants</div> :
                            <div className={dataClassName}>{props.counter}</div> }
                    </div>
                    <div className={commonStyles.buttons}>
                        <SuperButton className={commonStyles.incButton} name={'Inc'} disabled={incDisabled} onClick={onClickIncHandler}/>
                        <SuperButton className={commonStyles.resetButton} name={'Reset'} disabled={resDisabled} onClick={onClickResHandler}/>

                        {/*<button disabled={incDisabled} onClick={incCounter}>Inc</button>*/}
                        {/*<button disabled={resDisabled} onClick={resCounter}>Reset</button>*/}
                        {/*<button disabled={error} onClick={changeEditMode}>Set</button>*/}
                    </div>

                </div>
            </div>
        </>
    )
}


