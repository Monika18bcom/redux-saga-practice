import {takeEvery , put , call} from 'redux-saga/effects'
import {GQL_USER_DATA, PRODUCT_LIST, SET_GQL_USER_DATA, SET_PRODUCT_LIST, SET_USER_DATA, USER_DATA} from "./actionType";
import {fetchUserDataFunc, gqlFetchFunc} from "../utils/api";

function* getProducts(){
// we are calling the api here
    let data = yield fetch('http://localhost:8000/products');
    data = yield data.json();
    yield put({type: SET_PRODUCT_LIST, payload: data})

    console.log(data, "api called and display the data")

}

export function* productSaga(){
yield takeEvery(PRODUCT_LIST , getProducts)
}

function* getUserData(){
    const response = yield call(fetchUserDataFunc);
    console.log(response, response.data.data.auth_user, response.error, "axiosResponse api called")

    yield put({type: SET_USER_DATA, payload: response.data.data.auth_user})
}

function* getUserGqlData(){
    const response = yield call(gqlFetchFunc);
    console.log(response, "gql api called")

    yield put({type: SET_GQL_USER_DATA, payload: response.auth_user})
}

export function* userDataSaga(){
    yield takeEvery(USER_DATA , getUserData)
    yield takeEvery( GQL_USER_DATA , getUserGqlData)
}
