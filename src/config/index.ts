import { defaultTo } from '../helpers';

const config = {
    port: defaultTo('3030', process.env.PORT)
};

export default config;
