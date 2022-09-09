import { defaultTo } from '../helpers';

const config = {
    port: defaultTo('3030', process.env.PORT),
    graphqlEndpoint: defaultTo(
        'https://development-endpoint/graphql',
        process.env.GRAPHQL_ENDPOINT
    ),
    graphqlSecret: defaultTo('test-secret', process.env.GRAPHQL_SECRET)
};

export default config;
