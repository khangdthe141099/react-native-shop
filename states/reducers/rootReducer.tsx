import {combineReducers} from "redux";
import userReducer from '@/states/reducers/userSlice'

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer