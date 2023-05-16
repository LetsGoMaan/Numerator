import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localstorage-utils";


const rootReducer = combineReducers({
    counter: counterReducer,
})



export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState( {
        counter: store.getState().counter
    })
})

export type AppRootState = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store


// @ts-ignore
window.store = store