import login from "../actions/login"
import {combineReducers} from "redux";
const reducers={
    login
}

export default combineReducers({
    ...reducers
})
