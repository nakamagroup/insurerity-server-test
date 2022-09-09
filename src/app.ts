import compression from 'compression';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';

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

export default app;
