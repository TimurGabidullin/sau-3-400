


export type HeaderType={
    title: string,
    idHeader:string
}

const initialState= [
    {
        title: "Заголовок проверки 1",
        idHeader:"head1"
    } as HeaderType,
    {
        title: "Заголовок проверки 2",
        idHeader:'head2'
    } as HeaderType
]

export const headerReducer = (state: HeaderType[] = initialState): HeaderType[] => {
            return state
    }

export default headerReducer;