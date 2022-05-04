import {ActionsType} from "./store";


export type AppType = typeof initialState

const initialState = {
    isLogin: false,
    numberOfPlane:'',
    currentPage:1
}

export const appReducer = (state: AppType = initialState, action: ActionsType): AppType => {
    switch (action.type) {
        case 'LOGIN_APP':
            return {...state, isLogin: true, numberOfPlane: action.numberOfPlane}
        case 'LOGOUT_APP':
            return {...state, isLogin: false}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}

        default:
            return state
    }
}

export const loginAppAC = (numberOfPlane: string) => ({type: 'LOGIN_APP',numberOfPlane}) as const
export const logoutAppAC = () => ({type: 'LOGOUT_APP'}) as const
export const setNumberOfPlaneAppAC = () => ({type: 'LOGOUT_APP'}) as const
export const setCurrentPageAC = (currentPage:number) => ({type: 'SET_CURRENT_PAGE',currentPage}) as const




export default appReducer;