import { Router } from "express";

import auth from '../modules/auth/authRoutes';
import profile from '../modules/profile/profileRoutes';
import token from '../modules/token/tokenRoutes';

const router = Router();

router.use('/auth', auth);
router.use('/profile', profile);
router.use('/token', token);

export default router;