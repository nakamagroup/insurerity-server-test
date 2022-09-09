import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

import CustomError from '../errors/custom-error';

const errorHandler: ErrorRequestHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        return res
            .status(err.statusCode)
            .send({ errors: err.serializeErrors() });
    }

    if (Object.prototype.hasOwnProperty.call(err, 'errors')) {
        return res.status(400).send(err);
    }

    res.status(400).send({
        errors: [{ message: err.message }]
    });
};

export default errorHandler;
