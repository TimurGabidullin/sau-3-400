import {combineReducers, createStore} from "redux";
import headerReducer from "./headerReducer";
import checksReducer, {saveContinueChecksDataAC, saveDataAC, saveNewDataAC} from "./checksReducer";
import reportReducer, {addSettingsInReportAC, saveContinueReportDataAC} from "./reportReducer";
import appReducer, {loginAppAC, logoutAppAC} from "./appReducer";


let rootReducer = combineReducers({
    header: headerReducer,
    checks:checksReducer,
    report: reportReducer,
    app: appReducer
})


export type AppStateType = ReturnType<typeof rootReducer>


const store = createStore(rootReducer);



// store.subscribe(() => {
//     // debugger
//     pageOfNumber=store.getState().app.numberOfPlane
//     saveChecksState(store.getState(),pageOfNumber)
//     // saveReportState(store.getState())
//
// })


export type ActionsType = ReturnType<typeof saveDataAC>
    | ReturnType<typeof addSettingsInReportAC>
    | ReturnType<typeof loginAppAC>
    | ReturnType<typeof logoutAppAC>
    | ReturnType<typeof saveNewDataAC>
    | ReturnType<typeof saveContinueChecksDataAC>
    | ReturnType<typeof saveContinueReportDataAC>


export type StoreType = typeof store

//@ts-ignore
window.store = store

export default store

