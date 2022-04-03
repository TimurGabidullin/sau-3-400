
export type InitialStateType = typeof initialState

const initialState= [
    {
        title: "Заголовок проверки 1",
        idHeader:'Заголовок тех карты 1'
    },
    {
        title: "Заголовок проверки 2",
        idHeader:'Заголовок тех карты 2'
    }
]

export const headerReducer = (state: InitialStateType = initialState): InitialStateType => {
            return state
    }

export default headerReducer;