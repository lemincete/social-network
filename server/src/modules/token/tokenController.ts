import { ApiError } from "../../exceptions/ApiError";
import TokenService from "./tokenService";

import { Request, Response, NextFunction } from "express";

class TokenController {
    async refresh(req: Request, res: Response, next: NextFunction) {
        try {

            const { refreshToken } = req.cookies as { refreshToken: string }

            if (!refreshToken) {
                throw ApiError.unAuthorizedError();
            }

            const { tokens, user } = await TokenService.refreshToken(refreshToken);

            res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

            res.json({ accessToken: tokens.accessToken, user })

        } catch (e) {
            next(e);
        }
    }
}

export default new TokenController();