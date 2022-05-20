import {ActionsType} from "./store";
import  {v4} from 'uuid';

export type ReportType = { [idCheck: string]: string }

const initialState: ReportType = {

}

export const reportReducer = (state: ReportType = initialState, action: ActionsType): ReportType => {
    switch (action.type) {
        case 'ADD_SETTINGS_IN_REPORT':
            return {
                ...state, [action.idCheck]: `По тех карте 022.01.00 была произведена регуллировка вставки
             ${action.typeOfSubBlock}(${action.positionOfSubBlock}) блока ${action.typeOfBlock}-${action.numberOfChannel} резистором ${action.resistor}
              (книга 2, стр.${action.pageNumber})`
            }
        case 'NEW_DATA':
            return initialState

        case 'CONTINUE_REPORT_DATA': {
            return action.data;
        }

        case "ADD_NEW_REPORT": {
            return {[v4()]: action.report, ...state};
        }

        case "REMOVE_REPORT": {
            const newState = {...state}
            delete newState[action.idCheck]
            return newState;
        }


        default:
            return state
    }
}

export const addSettingsInReportAC = (idCheck: string,
                                      pageNumber: number,
                                      typeOfBlock: string,
                                      typeOfSubBlock: string,
                                      positionOfSubBlock:string,
                                      resistor: string,
                                      numberOfChannel:number

                                      ) => ({
    type: 'ADD_SETTINGS_IN_REPORT',
    idCheck,
    pageNumber,
    typeOfBlock,
    typeOfSubBlock,
    positionOfSubBlock,
    resistor,
    numberOfChannel

}) as const


export const saveContinueReportDataAC = (data: any) => ({
    type: 'CONTINUE_REPORT_DATA',
    data
}) as const

export const addNewReportAC = (report: string) => ({
    type: 'ADD_NEW_REPORT',
    report
}) as const

export const removeReportAC = (idCheck: string) => ({
    type: 'REMOVE_REPORT',
    idCheck
}) as const

export default reportReducer;