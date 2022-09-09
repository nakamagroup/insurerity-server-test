import 'express-async-errors';

import compression from 'compression';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';

import { NotFoundError } from './errors';
import { errorHandler } from './middlewares';
import { complaintRouter } from './routes';

const app: Express = express();

const BASE_URL = '/api/v1';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.use(BASE_URL, [complaintRouter]);

app.get('/status', (req: Request, res: Response) => {
    res.status(200).json({
        success: true
    });
});

app.all('*', async (req: Request, res: Response) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export default app;
