import {API_URL, AUTH_TOKEN, FETCH_GQL_QUERY, FETCH_QUERY} from "./queries";
import axios from "axios";
import apolloClientFunc from "./apolloClient";

export async function fetchUserDataFunc() {

    const graphqlQuery = {
        "operationName": "MyQuery",
        "query": FETCH_QUERY,
        "variables": {}
    };
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': AUTH_TOKEN
        },
        data: graphqlQuery,
        url: API_URL
    };

    console.log("fetch user data func")


    return await axios(options);
}


export async function gqlFetchFunc() {
    const client = await apolloClientFunc()
    const {data} = await client.query({
        query: FETCH_GQL_QUERY,
        variables: {},
    })

    console.log(data, "gqlFetchFunc")
    return data

}