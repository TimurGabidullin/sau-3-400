import {ActionsType} from "./store";


export type AppType = typeof initialState

const initialState = {
    isLogin: false,


}

export const appReducer = (state: AppType = initialState, action: ActionsType): AppType => {
    switch (action.type) {
        case 'LOGIN_APP':
            return {...state, isLogin: true}
        case 'LOGOUT_APP':
            return {...state, isLogin: false}
        default:
            return state
    }
}

export const loginAppAC = () => ({type: 'LOGIN_APP'}) as const
export const logoutAppAC = () => ({type: 'LOGOUT_APP'}) as const


export default appReducer;