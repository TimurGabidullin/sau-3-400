import {ActionsType} from "./store";


export type ReportType = { [head: string]: string }

const initialState: ReportType = {}

export const reportReducer = (state: ReportType = initialState, action: ActionsType): ReportType => {
    switch (action.type) {
        case 'ADD_SETTINGS_IN_REPORT':
            return {
                ...state, [action.idCheck]: `По тех карте 20.00.00 была произведена регуллировка вствки
             ${action.typeOfSubBlock} блока ${action.typeOfBlock} резистором ${action.resistor}
              (книга 2 ${action.pageNumber})`
            }
        case 'NEW_DATA':
            return initialState
        default:
            return state
    }
}

export const addSettingsInReportAC = (idCheck: string,
                                      pageNumber: number,
                                      typeOfBlock: string,
                                      typeOfSubBlock: string,
                                      resistor: string) => ({
    type: 'ADD_SETTINGS_IN_REPORT',
    idCheck,
    pageNumber,
    typeOfBlock,
    typeOfSubBlock,
    resistor
}) as const


export default reportReducer;