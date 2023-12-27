import {combineReducers} from "redux";
import {cartData, productData, userDataReducer} from "./reducer";

export const rootReducer = combineReducers({
    cartData,
    productData,
    userDataReducer,
})