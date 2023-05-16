
type ActionsType = ReturnType<typeof setStartValue> | ReturnType<typeof setMaxValue> | ReturnType<typeof setCurrentValue>

export type CounterStateType = {
    currentValue: number
    maxValue: number
    startValue: number
}

const initialState = {
    currentValue: 0,
    maxValue: 5,
    startValue: 0,
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType):CounterStateType => {
    switch (action.type) {
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.maxValue}
        case 'SET_START_VALUE':
            return {...state, startValue: action.startValue}
        case "SET_CURRENT_VALUE":
            return {...state, currentValue: action.currentValue}
        default:
            return state
    }
}

export const setMaxValue = (maxValue: number) => {
    return {type: 'SET_MAX_VALUE', maxValue: maxValue} as const
}
export const setStartValue = (startValue: number) => {
    return {type: 'SET_START_VALUE', startValue: startValue} as const
}
export const setCurrentValue = (currentValue: number) => {
    return {type: 'SET_CURRENT_VALUE', currentValue: currentValue} as const
}