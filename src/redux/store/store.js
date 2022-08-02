import { combineReducers, createStore } from "redux";
import { reducersCounter } from "../reducers/reducersCounter";
import { reducersProducts } from "../reducers/reducersProducts";

const reducers = combineReducers(
    {
        countStore: reducersCounter,
        productoStore: reducersProducts
      
    }
)

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);