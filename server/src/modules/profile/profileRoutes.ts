import { Router } from "express";

import { checkAuth } from "../../middlewares/CheckAuthMiddleware";

import controller from './profileController';

const router = Router();

router.get('/me', checkAuth, controller.getMyProfile);

export default router;