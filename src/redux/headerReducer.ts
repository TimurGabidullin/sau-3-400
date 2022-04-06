


export type HeaderType={
    title: string,
    idHeader:string
}

const initialState= [
    {
        title: "Проверка масштабов по сигналам текущего тангажа, крена, курса.",
        idHeader:"head1"
    } as HeaderType,
    {
        title: "Проверка передаточных коэффициентов угловых скоростей тангажа, курса, крена. ",
        idHeader:'head2'
    } as HeaderType
]

export const headerReducer = (state: HeaderType[] = initialState): HeaderType[] => {
            return state
    }

export default headerReducer;