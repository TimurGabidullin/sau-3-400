import {ActionsType} from "./store";

export type ChecksType = typeof initialState

type ControlFunctionType = (inputValue: string, channel: string, indexOfTable: number) => boolean


export type CheckType = {
    title: string,
    idHeader: string,
    idCheck: string,
    pageNumber: number,
    paginatorNumber: number
    typesOfBlocks?: string[],
    numbersOfContacts?: string[]
    controlFunctions: ControlFunctionType[]
    controlValues?: number[]
    valuesOfErrors?: number[]
    // valuesOfBlocks?: number[][]
    valuesOfBlocks?: { 'channel1': number, 'channel2': number, 'channel3': number, 'channel4': number }[]
    isHaveSettings?: boolean[]
    directionsOfChecks?: string[]

}

function f1(inputValue: string, channel: string, indexOfTable: number = 0) {

    // @ts-ignore
    return (+inputValue <= this.controlValues[indexOfTable] + this.valuesOfErrors[indexOfTable]
        // @ts-ignore
        && +inputValue >= this.controlValues[indexOfTable] - this.valuesOfErrors[indexOfTable])
}

function f0(inputValue: string, channel: string, indexOfTable: number = 0) {
    return true
}

function f2(inputValue: string, channel: string, indexOfTable: number = 0) {

    // @ts-ignore.
    return f1.call(this, +inputValue / this.valuesOfBlocks[0][channel], channel, indexOfTable)

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
            numbersOfContacts: ['U21/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [f1, f1],
            controlValues: [0, 0],
            valuesOfErrors: [0.25, 0],
            valuesOfBlocks: [
                {'channel1': 1, 'channel2': 2, 'channel3': 3, 'channel4': 4},
                {'channel1': 5, 'channel2': 6, 'channel3': 7, 'channel4': 8}]
            ,
            isHaveSettings: [false, true]


        } as CheckType,
        {
            title: "Проверка коэффициента передачи ВГМ 103-1",
            idHeader: "1",
            idCheck: 'check2',
            pageNumber: 474,
            paginatorNumber: 2,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК'],
            numbersOfContacts: [
                'U23/11 Ш35', 'U24/11 Ш35',
                'U23/11 Ш35', 'U24/11 Ш35'
            ],
            controlFunctions: [f0, f2, f0, f2],
            controlValues: [0, 2.25, 0, 2.25,],
            valuesOfErrors: [0, 0.05, 0, 0.05],
            valuesOfBlocks: [
                {'channel1': 1, 'channel2': 2, 'channel3': 3, 'channel4': 4},
                {'channel1': 5, 'channel2': 6, 'channel3': 7, 'channel4': 8},
                {'channel1': 1, 'channel2': 2, 'channel3': 3, 'channel4': 4},
                {'channel1': 5, 'channel2': 6, 'channel3': 7, 'channel4': 8}
            ],
            directionsOfChecks: [
                'вправо/вверх и 2Т', 'вправо/вверх и 2Т',
                'влево/вниз и 2Т', 'влево/вниз и 2Т',
            ],
            isHaveSettings: [false, true, false, true],

        } as CheckType,
        {
            title: "Проверка масштабов",
            idHeader: "1",
            idCheck: 'check3',
            pageNumber: 475,
            paginatorNumber: 3,
            typesOfBlocks: ['ВПК', 'ВПК', 'ВПК', 'ВПК', 'ВБК', 'ВБК', 'ВБК', 'ВБК'],
            numbersOfContacts: [
                'U26/11 Ш35', 'U20/11 Ш35',
                'U26/11 Ш35', 'U20/11 Ш35',
                'U26/11 Ш35', 'U26/11 Ш35',
                'U24/11 Ш35', 'U24/11 Ш35'
            ],
            controlFunctions: [f0, f0, f0, f0, f0, f0, f0, f0],
            controlValues: [0, 2.25],
            valuesOfErrors: [0, 0.05],
            valuesOfBlocks: [
                {'channel1': 1, 'channel2': 2, 'channel3': 3, 'channel4': 4},
                {'channel1': 1, 'channel2': 2, 'channel3': 3, 'channel4': 4},
                {'channel1': 1, 'channel2': 2, 'channel3': 3, 'channel4': 4},
                {'channel1': 1, 'channel2': 2, 'channel3': 3, 'channel4': 4},
                {'channel1': 1, 'channel2': 2, 'channel3': 3, 'channel4': 4},
                {'channel1': 1, 'channel2': 2, 'channel3': 3, 'channel4': 4},
                {'channel1': 1, 'channel2': 2, 'channel3': 3, 'channel4': 4},
                {'channel1': 1, 'channel2': 2, 'channel3': 3, 'channel4': 4},
            ],
            directionsOfChecks: [
                'На кабрирование', 'На кабрирование',
                'На пикирование', 'На пикирование',
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
            paginatorNumber: 4


        } as CheckType,

        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости курса",
            idCheck: 'check5',
            pageNumber: 482,
            paginatorNumber: 5


        } as CheckType,

        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости крена",
            idCheck: 'check6',
            pageNumber: 483,
            paginatorNumber: 6


        } as CheckType,

    ],

}


export const checksReducer = (state: ChecksType = initialState, action: ActionsType): any => {

    switch (action.type) {
        case 'SAVE_DATA':
            return {
                ...state,
                // @ts-ignore
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

        default:
            return state
    }
}


export const saveDataAC = (data: number[], head: string, idCheck: string, indexOfTable: number) => ({
    type: 'SAVE_DATA',
    data,
    head,
    idCheck,
    indexOfTable
}) as const


export default checksReducer;