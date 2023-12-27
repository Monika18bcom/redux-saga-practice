import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import { ApolloProvider } from '@apollo/client'
import apolloClientFunc from "./utils/apolloClient";


const client = apolloClientFunc()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
    <Provider store={store}>
        <App />
    </Provider>
    </ApolloProvider>
);

