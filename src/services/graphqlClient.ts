import { createClient } from 'graphqurl';

const { GRAPHQL_ENDPOINT, GRAPHQL_SECRET } = process.env;

const graphqlClient = createClient({
    endpoint: `${GRAPHQL_ENDPOINT}/v1/graphql`,
    headers: {
        'x-hasura-admin-secret': `${GRAPHQL_SECRET}`
    }
});

export default graphqlClient;
