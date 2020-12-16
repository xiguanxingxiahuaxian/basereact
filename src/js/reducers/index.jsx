import login from "../reducers/login"
import {combineReducers} from "redux";
const reducers={
    login
}

export default combineReducers({
    ...reducers
})
