import {createStore} from "redux";
import rootReducer, {combinedReducer} from "./Reducer";

export const store = createStore(rootReducer);

//export const store = createStore(combinedReducer);