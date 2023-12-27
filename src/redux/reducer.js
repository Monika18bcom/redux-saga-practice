import {
    ADD_TO_CART,
    EMPTY_CART,
    REMOVE_FROM_CART,
    SET_GQL_USER_DATA,
    SET_PRODUCT_LIST,
    SET_USER_DATA
} from "./actionType";

const initialCartData = []
export const cartData = (state = initialCartData, action) => {
    switch (action.type) {
        case ADD_TO_CART :
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            // state.length = state.length ? state.length - 1 : []
            const remItem = state.filter((item)=> item.id !== action.payload)
            return [...remItem]
        case EMPTY_CART:
            state = []
            return [...state]
        default:
            return state
    }
}

export const productData = (state = [] , action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return [...action.payload]
        default:
            return state
    }
}

export const userDataReducer = (state = [] , action) => {
    // console.log(action)
    switch (action.type) {
        case SET_USER_DATA:
            return [...action.payload]
        case SET_GQL_USER_DATA:
            return [...action.payload]
        default:
            return state
    }
}