import { Router } from "express";

import auth from '../modules/auth/authRoutes';

const router = Router();

router.use('/auth', auth);

export default router;