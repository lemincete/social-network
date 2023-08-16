import { Router } from "express";

import { checkAuth } from "../../middlewares/CheckAuthMiddleware";

import { body } from 'express-validator'

import controller from './profileController';


const router = Router();

router.get('/me', checkAuth, controller.getMyProfile);
router.get('/subs', checkAuth, controller.getMySubs);
router.post('/update', [
    body('name', `Name is too short`).isLength({ min: 2 }),
    body('surname', `Surname is too short`).isLength({ min: 2 }),
    body('gender', `Gender can't be has numbers/symbols`).matches(/^[^\d\s]*$/),
    body('email', `Incorrect email`).matches(/^\w+@[a-z]+\.[a-z]+$/),
], checkAuth, controller.updateProfile);

export default router;