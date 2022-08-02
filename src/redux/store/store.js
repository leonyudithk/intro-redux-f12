import { combineReducers, createStore } from "redux";
import { reducersCounter } from "../reducers/reducersCounter";

const reducers = combineReducers(
    {
        countStore: reducersCounter,
       
    }
)

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);