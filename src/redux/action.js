import {ADD_TO_CART, EMPTY_CART, GQL_USER_DATA, PRODUCT_LIST, REMOVE_FROM_CART, USER_DATA} from "./actionType";

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export const removeFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        payload: data
    }
}

export const emptyCart = (data) => {
    return {
        type: EMPTY_CART,
        payload: data
    }
}

export const getProductList = () => {
    return {
        type: PRODUCT_LIST,
    }
}

export const userDataAction = () => {
    console.log("user Data")
    return {
        type: USER_DATA,
    }
}

export const gqlUserDataAction = () => {
    console.log("gql user Data")
    return {
        type: GQL_USER_DATA,
    }
}
