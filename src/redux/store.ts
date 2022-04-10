import {combineReducers, createStore} from "redux";
import headerReducer from "./headerReducer";
import checksReducer, {saveDataAC} from "./checksReducer";
import reportReducer, {saveSettingsInReportAC} from "./reportReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
    header: headerReducer,
    checks: checksReducer,
    report: reportReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers);


export type ActionsType = ReturnType<typeof saveDataAC>
    | ReturnType<typeof saveSettingsInReportAC>


export type StoreType = typeof store

//@ts-ignore
window.store = store

export default store

