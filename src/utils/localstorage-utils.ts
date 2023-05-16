import {AppRootState} from "../state/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('redux-counter-values');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const saveState = (state: AppRootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('redux-counter-values', serializedState);
    } catch {
        // ignore write errors
    }
}