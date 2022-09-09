import http from 'http';

import app from './app';

const PORT = 3030;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server ready on ${PORT} ⚡`));
