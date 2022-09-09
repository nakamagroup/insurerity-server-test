import { NextFunction, Request, Response } from 'express';

export const defaultTo = (arg1: string, arg2: string | undefined) =>
    arg2 ?? arg1;

export const catchAsync =
    (func: (req: Request, res: Response, next: NextFunction) => void) =>
    (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(func(req, res, next)).catch((err) => next(err));
    };
