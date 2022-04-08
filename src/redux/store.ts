import { combineReducers, createStore} from "redux";
import headerReducer from "./headerReducer";
import checksReducer, {saveDataAC} from "./checksReducer";

let reducers = combineReducers({
header:headerReducer,
checks:checksReducer
})

export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers);




export type ActionsType = ReturnType<typeof saveDataAC>


//     | ReturnType<typeof sendMessageActionCreator>
//     | ReturnType<typeof followSuccess>
//     | ReturnType<typeof unfollowSuccess>
//     | ReturnType<typeof setUsers>
//     | ReturnType<typeof setCurrentPage>
//     | ReturnType<typeof setTotalUsersCount>
//     | ReturnType<typeof toggleIsFetching>
//     | ReturnType<typeof setUserProfile>
//     | ReturnType<typeof setAuthUserData>
//     | ReturnType<typeof toggleFollowingProgress>
//     | ReturnType<typeof setStatus>
//     | ReturnType<typeof initializedSuccess>
//     | ReturnType<typeof deletePost>
//     | ReturnType<typeof savePhotoSuccess>
//     | ReturnType<typeof getCaptchaUrlSuccess>
//


// export type StoreType = {
//     subscribe: (observer: () => void) => void
//     getState: () => AppStateType
//     dispatch: (action: ActionsType) => void
// }
export type StoreType = typeof store

//@ts-ignore
window.store=store

export default store

