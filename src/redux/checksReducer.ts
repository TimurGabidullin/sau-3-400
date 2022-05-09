import {ActionsType} from "./store";
import {loadChecksState} from "../utils/localStorage";


export type ChecksType = { [head: string]: CheckType[] }
// export type ChecksType = typeof initialState

// type ControlFunctionType = (inputValue: string, channel: string, indexOfTable: number) => boolean

export type CheckType = {
    title: string
    idHeader: string
    idCheck: string
    pageNumber: number
    paginatorNumber: number
    typesOfBlocks: string[]
    typesOfSubBlocks: string[]
    positionOfSubBlock: string[]
    resistors: string[]
    numbersOfContacts: string[]
    controlFunctions: number[]
    controlValues: number[]
    valuesOfErrors: number[]
    valuesOfBlocks: { 'channel1': string, 'channel2': string, 'channel3': string, 'channel4': string }[]
    isHaveSettings: boolean[]
    directionsOfChecks?: string[]
    subBlocks?: string[]

}

export function compareFunc(numberOfPlane: string, inputValue: string, channel: string, indexOfTable: number = 0) {
    if (inputValue === '') {
        return true
    }
    // @ts-ignore
    return (+inputValue <= this.controlValues[indexOfTable] + this.valuesOfErrors[indexOfTable]
        // @ts-ignore
        && +inputValue >= this.controlValues[indexOfTable] - this.valuesOfErrors[indexOfTable])
}

export function emptyFunc() {
    return true
}

export function dividerFunc(numberOfPlane: string, inputValue: string, channel: string, indexOfTable: number = 0) {

    if (inputValue === '') {
        return true
    }

    // @ts-ignore.
    return compareFunc.call(this, +inputValue / this.valuesOfBlocks[0][channel], channel, indexOfTable)

}

export function universalFunc(numberOfPlane: string, inputValue: string, channel: string, indexOfTable: number = 0) {

    if (inputValue === '') {
        return true
    }
    debugger
    let value = 0
    if (indexOfTable === 2 || indexOfTable === 2) value = loadChecksState(numberOfPlane).head1[0].valuesOfBlocks[0][channel]
    if (indexOfTable === 6 || indexOfTable === 7) value = loadChecksState(numberOfPlane).head1[0].valuesOfBlocks[1][channel]

    // @ts-ignore.
    return compareFunc.call(this, numberOfPlane, (+inputValue - value), channel, indexOfTable)
}

export const numToFunc = {
    0: emptyFunc,
    1: compareFunc,
    2: dividerFunc,
    3: universalFunc,
}


const initialState = {
    "head1": [
        {
            title: "Проверка нулевых сигналов",
            idHeader: "1",
            idCheck: 'check1',
            pageNumber: 473,
            paginatorNumber: 1,
            typesOfBlocks: ['ВПК', 'ВБК'],
            typesOfSubBlocks: ['', 'ВГМ103-1'],
            positionOfSubBlock: ['', 'X14'],
            resistors: ['', 'R4'],
            numbersOfContacts: ['U21/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [1, 1],
            controlValues: [0, 0],
            valuesOfErrors: [0.25, 0.1],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}],
            isHaveSettings: [false, true]


        } as CheckType,
        {
            title: "Проверка коэффициента передачи ВГМ 103-1",
            idHeader: "1",
            idCheck: 'check2',
            pageNumber: 474,
            paginatorNumber: 2,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['', 'ВГМ 103-1', '', 'ВГМ 103-1'],
            positionOfSubBlock: ['', 'Х14', '', 'X14'],
            resistors: ['', 'R6', '', 'R6'],
            numbersOfContacts: [
                'U23/11 Ш35', 'U24/11 Ш35',
                'U23/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [0, 2, 0, 2],
            controlValues: [0, 2.25, 0, 2.25,],
            valuesOfErrors: [0, 0.05, 0, 0.05],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}],
            directionsOfChecks: [
                'Вправо/вверх и 2Т', 'Вправо/вверх и 2Т',
                'Влево/вниз и 2Т', 'Влево/вниз и 2Т',],
            isHaveSettings: [false, true, false, true],

        } as CheckType,
        {
            title: "Проверка масштабов",
            idHeader: "1",
            idCheck: 'check3',
            pageNumber: 475,
            paginatorNumber: 3,
            typesOfBlocks: ['ВПК', 'ВПК', 'ВПК', 'ВПК', 'ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['ВИ-78', 'ВИ-78', 'ВИ-78', 'ВИ-78', 'ВИ-78', 'ВИ-78', 'БС-47', 'БС-47'],
            positionOfSubBlock: ['Х13', 'Х13', 'Х14', 'X14', 'Х21', 'Х21', 'Х15', 'X15'],
            resistors: ['R1', 'R1', 'R1', 'R1', 'R1', 'R1', 'R3', 'R3'],
            numbersOfContacts: [
                'U26/11 Ш35', 'U26/11 Ш35',
                'U20/11 Ш35', 'U20/11 Ш35',
                'U26/11 Ш35', 'U26/11 Ш35',
                'U24/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [1, 1, 3, 3, 1, 1, 3, 3],
            controlValues: [3.5, -3.5, 3.5, -3.5, -1.89, 1.89, -2.24, 2.24],
            valuesOfErrors: [0.35, 0.35, 0.35, 0.35, 0.21, 0.21, 0.21, 0.21],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},],
            additionalValues: [],
            directionsOfChecks: [
                'На кабрирование', 'На пикирование',
                'На кабрирование', 'На пикирование',
                'Вправо', 'Влево',
                'Вправо', 'Влево'],
            isHaveSettings: [true, true, true, true, true, true, true, true]

        } as CheckType

    ],
    "head2": [
        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости тангажа",
            idCheck: 'check4',
            pageNumber: 480,
            paginatorNumber: 4,
            typesOfBlocks: ['ВПК', 'ВПК',],
            typesOfSubBlocks: ['СУ-73', 'СУ-73'],
            positionOfSubBlock: ['Х8', 'Х8'],
            resistors: ['R9', 'R9'],
            numbersOfContacts: ['U31/11 Ш35', 'U31/11 Ш35'],
            controlFunctions: [1, 1],
            controlValues: [-0.5, 0.5],
            valuesOfErrors: [0.1, 0.1],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},],
            additionalValues: [],
            directionsOfChecks: ['На пикирование', 'На кабрирование'],
            isHaveSettings: [true, true]
        } as CheckType,

        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости курса",
            idCheck: 'check5',
            pageNumber: 482,
            paginatorNumber: 5,
            typesOfBlocks: ['ВПК', 'ВПК',],
            typesOfSubBlocks: ['СУ-73', 'СУ-73'],
            positionOfSubBlock: ['Х8', 'Х8'],
            resistors: ['R7', 'R7'],
            numbersOfContacts: ['U31/11 Ш35', 'U31/11 Ш35'],
            controlFunctions: [1, 1],
            controlValues: [-1.6, -1.6],
            valuesOfErrors: [0.3, 0.3],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},],
            additionalValues: [],
            directionsOfChecks: ['Вправо', 'Влево'],
            isHaveSettings: [true, true]
        } as CheckType,

        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости крена",
            idCheck: 'check6',
            pageNumber: 483,
            paginatorNumber: 6,
            typesOfBlocks: ['ВБК', 'ВБК',],
            typesOfSubBlocks: ['ВО104-1', 'ВО104-1'],
            positionOfSubBlock: ['Х13', 'Х13'],
            resistors: ['R5', 'R5'],
            numbersOfContacts: ['U19/11 Ш37', 'U19/11 Ш37'],
            controlFunctions: [1, 1],
            controlValues: [-1.8, 1.8],
            valuesOfErrors: [0.3, 0.3],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},],
            additionalValues: [],
            directionsOfChecks: ['Влево', 'Вправо'],
            isHaveSettings: [true, true]
        } as CheckType,
    ],
    "head3": [
        {
            title: "Проверка срабатывания пороговых устройств по предельным значениям крена на высотах > 200 м.",
            idHeader: "3",
            idCheck: 'check7',
            pageNumber: 486,
            paginatorNumber: 7,
            typesOfBlocks: ['ВПК', 'ВБК'],
            typesOfSubBlocks: ['', 'ВГМ103-1'],
            positionOfSubBlock: ['', 'X14'],
            resistors: ['', 'R4'],
            numbersOfContacts: ['U21/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [1, 1],
            controlValues: [0, 0],
            valuesOfErrors: [0.25, 0.1],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}],
            isHaveSettings: [false, true]
        } as CheckType,
        {
            title: "Проверка срабатывания пороговых устройств по предельным значениям крена на высотах ≤ 60 м.",
            idHeader: "1",
            idCheck: 'check2',
            pageNumber: 474,
            paginatorNumber: 2,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['', 'ВГМ 103-1', '', 'ВГМ 103-1'],
            positionOfSubBlock: ['', 'Х14', '', 'X14'],
            resistors: ['', 'R6', '', 'R6'],
            numbersOfContacts: [
                'U23/11 Ш35', 'U24/11 Ш35',
                'U23/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [0, 2, 0, 2],
            controlValues: [0, 2.25, 0, 2.25,],
            valuesOfErrors: [0, 0.05, 0, 0.05],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}],
            directionsOfChecks: [
                'Вправо/вверх и 2Т', 'Вправо/вверх и 2Т',
                'Влево/вниз и 2Т', 'Влево/вниз и 2Т',],
            isHaveSettings: [false, true, false, true],

        } as CheckType,
        {
            title:  "Проверка срабатывания пороговых устройств по предельным значениям тангажа",
            idHeader: "1",
            idCheck: 'check3',
            pageNumber: 475,
            paginatorNumber: 3,
            typesOfBlocks: ['ВПК', 'ВПК', 'ВПК', 'ВПК', 'ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['ВИ-78', 'ВИ-78', 'ВИ-78', 'ВИ-78', 'ВИ-78', 'ВИ-78', 'БС-47', 'БС-47'],
            positionOfSubBlock: ['Х13', 'Х13', 'Х14', 'X14', 'Х21', 'Х21', 'Х15', 'X15'],
            resistors: ['R1', 'R1', 'R1', 'R1', 'R1', 'R1', 'R3', 'R3'],
            numbersOfContacts: [
                'U26/11 Ш35', 'U26/11 Ш35',
                'U20/11 Ш35', 'U20/11 Ш35',
                'U26/11 Ш35', 'U26/11 Ш35',
                'U24/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [1, 1, 3, 3, 1, 1, 3, 3],
            controlValues: [3.5, -3.5, 3.5, -3.5, -1.89, 1.89, -2.24, 2.24],
            valuesOfErrors: [0.35, 0.35, 0.35, 0.35, 0.21, 0.21, 0.21, 0.21],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},],
            additionalValues: [],
            directionsOfChecks: [
                'На кабрирование', 'На пикирование',
                'На кабрирование', 'На пикирование',
                'Вправо', 'Влево',
                'Вправо', 'Влево'],
            isHaveSettings: [true, true, true, true, true, true, true, true]

        } as CheckType

    ],
}


export const checksReducer = (state: ChecksType = initialState, action: ActionsType): ChecksType => {

    switch (action.type) {
        case 'SAVE_DATA':
            return {
                ...state,
                [action.head]: state[action.head].map((check: CheckType) => {
                    if (check.idCheck === action.idCheck) {
                        return {
                            ...check, valuesOfBlocks: check.valuesOfBlocks?.map((data, i) => {
                                if (i === action.indexOfTable) {
                                    // debugger
                                    return {
                                        ...data,
                                        'channel1': action.data[0],
                                        'channel2': action.data[1],
                                        'channel3': action.data[2],
                                        'channel4': action.data[3]
                                    }
                                }
                                return data
                            })
                        }
                    } else return check;
                })
            }

        case 'NEW_DATA':

            return initialState

        case 'CONTINUE_DATA': {


            // @ts-ignore
            return action.data;
        }
        default:
            return state
    }
}


export const saveDataAC = (data: string[], head: string, idCheck: string, indexOfTable: number) => ({
    type: 'SAVE_DATA',
    data,
    head,
    idCheck,
    indexOfTable
}) as const

export const saveNewDataAC = (numberOfPlane: string) => ({
    type: 'NEW_DATA',
    numberOfPlane
}) as const

export const saveContinueChecksDataAC = (data: any) => ({
    type: 'CONTINUE_DATA',
    data
}) as const

export default checksReducer;