import { ApiError } from "../exceptions/ApiError";

import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message })
    }
    return res.status(500).json({ message: 'Unexpected error' });
}