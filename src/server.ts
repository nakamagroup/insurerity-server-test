import http from 'http';

import app from './app';
import config from './config';

const { port } = config;

const server = http.createServer(app);

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Server ready on ${port} ⚡`));
