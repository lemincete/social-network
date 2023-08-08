import { Router } from "express";

import { query } from "express-validator";

import controller from './authController';

const router = Router();

router.post('/registration', [
    query('name', `Name is too short`).isLength({ min: 2 }),
    query('surname', `Surname is too short`).isLength({ min: 2 }),
    query('password', `Password is too short`).isLength({ min: 8 }),
    query('password', `Password is too long`).isLength({ max: 16 }),
    query('gender', `Gender can't be has numbers/symbols`).matches(/^[^\d\s]*$/),
    query('email', `Incorrect email`).matches(/^\w+@[a-z]+\.[a-z]+$/)
], controller.registration);

router.post('/login', [
    query('password', `Password is too short`).isLength({ min: 8 }),
    query('password', `Password is too long`).isLength({ max: 16 }),
    query('email', `Incorrect email`).matches(/^\w+@[a-z]+\.[a-z]+$/)
], controller.login);

export default router