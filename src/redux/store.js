import {rootReducer} from "./combineReducer";
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import {productSaga , userDataSaga} from "./saga";


// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware()
const store = configureStore(
    {
        reducer: rootReducer,
        middleware:()=>[sagaMiddleware]
    }
)

sagaMiddleware.run(productSaga)
sagaMiddleware.run(userDataSaga)

export default store