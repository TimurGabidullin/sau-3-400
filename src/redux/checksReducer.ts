

export type ChecksType =typeof initialState

export type CheckType = {
    title: string,
    idHeader: string,
    idTech: string,
    pageNumber: number,
    paginatorNumber:number

}

const initialState = {
    "head1": [
        {
            title: "Проверка нулевых сигналов",
            idHeader: "1",
            idTech: 'check1',
            pageNumber: 473,
            paginatorNumber:1
        } as CheckType,
        {
            title: "Проверка коэффициента передачи ВГМ 103-1",
            idHeader: "1",
            idTech: 'check2',
            pageNumber: 474,
            paginatorNumber:2

        } as CheckType,
        {
            title: "Проверка масштабов",
            idHeader: "1",
            idTech: 'check3',
            pageNumber: 475,
            paginatorNumber:3

        } as CheckType

    ] ,
    "head2": [
        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости тангажа",
            idTech: 'check4',
            pageNumber: 480,
            paginatorNumber:4


        } as CheckType,

        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости курса",
            idTech: 'check5',
            pageNumber: 482,
            paginatorNumber:5


        } as CheckType,

        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости крена",
            idTech: 'check6',
            pageNumber: 483,
            paginatorNumber:6


        } as CheckType,

    ] ,

}


export const checksReducer = (state: ChecksType = initialState): any => {
    return state
}

export default checksReducer;