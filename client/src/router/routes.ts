import { FC } from "react";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ErrorPage from "../pages/ErrorPage";
import ProfilePage from "../pages/ProfilePage";

import { NavigateToLogin } from "../pages/LoginPage";


interface RouterItem {
    path: string,
    Component: FC
}

const privateRoutesArr: RouterItem[] = [
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/profile',
        Component: ProfilePage
    },
    {
        path: '*',
        Component: ErrorPage
    }
];

const publicRoutesArr: RouterItem[] = [
    {
        path: '/',
        Component: NavigateToLogin
    },
    {
        path: '/login',
        Component: LoginPage
    },
    {
        path: '/registration',
        Component: RegistrationPage
    }
];

export const routesArr = localStorage.getItem('jwt') ? privateRoutesArr : publicRoutesArr