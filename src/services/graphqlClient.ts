import { createClient } from 'graphqurl';

import config from '../config';

const { graphqlEndpoint, graphqlSecret } = config;

const graphqlClient = createClient({
    endpoint: `${graphqlEndpoint}/v1/graphql`,
    headers: {
        'x-hasura-admin-secret': `${graphqlSecret}`
    }
});

export default graphqlClient;
