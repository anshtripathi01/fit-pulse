import { applyMiddleware, createStore } from "redux";
import { fitnessReducer } from "../reducer/reducer";
import thunk from "redux-thunk";



export const store = createStore(fitnessReducer,applyMiddleware(thunk))