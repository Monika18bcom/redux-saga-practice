import { ApolloClient, InMemoryCache } from '@apollo/client';
import {createHttpLink} from "@apollo/client";
import {API_URL, AUTH_TOKEN} from "./queries";

function apolloClientFunc(){
    const httpLink = createHttpLink({
        uri: API_URL,
        headers: {
            authorization: AUTH_TOKEN,
        }
    });

    return  new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    });
}

export default apolloClientFunc;