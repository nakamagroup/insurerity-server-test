import compression from 'compression';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.get('/status', (req: Request, res: Response) => {
    res.status(200).json({
        success: true
    });
});

export default app;
