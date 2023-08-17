import { Request, Response, NextFunction } from "express";

import ProfileService from "./profileService";

import { validationQueries } from "../../helpers/validationQueris";


class ProfileController {
    async getMyProfile(req: Request, res: Response, next: NextFunction) {
        try {

            const { userId } = req;

            const user = await ProfileService.getMyProfile(userId);

            return res.json({ ...user });

        } catch (e) {
            next(e);
        }
    }

    async getMySubs(req: Request, res: Response, next: NextFunction) {
        try {

            const { userId } = req;

            const subs = await ProfileService.getMySubs(userId);

            return res.json({ ...subs })

        } catch (e) {
            next(e);
        }
    }

    async updateProfile(req: Request, res: Response, next: NextFunction) {
        try {

            validationQueries(req);

            const { userId } = req;

            const { name, surname, email, gender, password, image, bio } = req.body as { name: string, surname: string, email: string, gender: string, password: string, image: string | null, bio: string }

            const user = await ProfileService.updateProfile(userId, name, surname, email, gender, password, image, bio);

            return res.json({ user });

        } catch (e) {
            console.log(e);
            next(e);
        }
    }
}

export default new ProfileController();