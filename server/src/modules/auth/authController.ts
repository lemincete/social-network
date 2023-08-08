import { Request, Response, NextFunction } from "express";

import AuthService from "./authService";

import { validationQueries } from "../../helpers/validationQueris";

class AuthController {

    async login(req: Request, res: Response, next: NextFunction) {
        try {

            const { email, password } = req.query as { email: string, password: string }

            validationQueries(req);

            const { accessToken, refreshToken } = await AuthService.login(email, password);

            res.cookie('refreshToken', refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

            return res.json({ accessToken });


        } catch (e) {
            next(e);
        }
    }

    async registration(req: Request, res: Response, next: NextFunction) {
        try {

            const { name, surname, password, gender, email } = req.query as { name: string, surname: string, password: string, gender: string, email: string }

            validationQueries(req);

            await AuthService.registration(name, surname, password, gender, email)

            return res.json({ message: true });

        } catch (e) {
            next(e);
        }
    }

}

export default new AuthController();