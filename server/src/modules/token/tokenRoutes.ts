import { Router } from 'express';

import controller from './tokenController';

const router = Router();

router.get('/refresh', controller.refresh);

export default router