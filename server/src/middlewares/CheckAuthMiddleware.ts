import { Request, Response, NextFunction } from 'express';

import { ApiError } from '../exceptions/ApiError';
import TokenService from '../modules/token/tokenService';

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    try {

        const authorizationHeaders = req.headers.authorization;

        if (!authorizationHeaders) {
            throw ApiError.unAuthorizedError();
        }

        const token = authorizationHeaders.split(' ')[1];

        if (!token) {
            throw ApiError.unAuthorizedError();
        }

        const userId = TokenService.validateAccessToken(token);

        if (!userId) {
            throw ApiError.unAuthorizedError();
        }

        req.userId = userId;

        next();

    } catch (e) {
        throw ApiError.unAuthorizedError()
    }
}