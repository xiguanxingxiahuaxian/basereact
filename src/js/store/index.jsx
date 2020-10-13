import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers"
const composedCreateStore=compose(
    applyMiddleware(thunk)
)(createStore)

function configureStore(initalState={}) {
    const store=composedCreateStore(reducer,initalState)
    return store
}

export default configureStore;
