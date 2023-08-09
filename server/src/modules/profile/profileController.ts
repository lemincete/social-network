import { Request, Response, NextFunction } from "express";
import ProfileService from "./profileService";

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
}

export default new ProfileController();