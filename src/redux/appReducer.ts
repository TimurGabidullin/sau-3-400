import {ActionsType} from "./store";


export type AppType = (string | null)[]

const initialState = [null]

export const appReducer = (state: AppType = initialState, action: ActionsType): AppType => {
    switch (action.type) {
        case 'ADD_SETTINGS_IN_REPORT':
            return state

        default:
            return state
    }
}

// export const saveSettingsInReportAC = (indexOfTable: number) => ({
//     type: 'SAVE_SETTINGS_IN_REPORT',
//     indexOfTable
// }) as const


export default appReducer;