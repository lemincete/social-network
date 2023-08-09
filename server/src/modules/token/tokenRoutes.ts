import { Router } from 'express';

import controller from './tokenController';

import { checkAuth } from '../../middlewares/CheckAuthMiddleware';

const router = Router();

router.get('/refresh', checkAuth, controller.refresh);

export default router