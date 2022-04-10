import {ActionsType} from "./store";


export type ReportType = (string | null)[]

const initialState = [null]

export const reportReducer = (state: ReportType = initialState, action: ActionsType): ReportType => {
    switch (action.type) {
        case 'SAVE_SETTINGS_IN_REPORT':
            return state
        default:
            return state
    }
}

export const saveSettingsInReportAC = (indexOfTable: number) => ({
    type: 'SAVE_SETTINGS_IN_REPORT',
    indexOfTable
}) as const


export default reportReducer;