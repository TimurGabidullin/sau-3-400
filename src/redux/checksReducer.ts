

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
            title: "Название проверки 1",
            idHeader: "1",
            idTech: 'check1',
            pageNumber: 234,
            paginatorNumber:1
        } as CheckType,
        {
            title: "Название проверки 2",
            idHeader: "1",
            idTech: 'check2',
            pageNumber: 235,
            paginatorNumber:2

        } as CheckType
    ] ,
    "head2": [
        {
            idHeader: "2",
            title: "Название проверки 3",
            idTech: 'check3',
            pageNumber: 236,
            paginatorNumber:3


        } as CheckType
    ] ,

}


export const checksReducer = (state: ChecksType = initialState): any => {
    return state
}

export default checksReducer;