import { FC } from "react";

import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ErrorPage from "../pages/ErrorPage";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import FeedPage from "../pages/FeedPage";

import { NavigateToLogin } from "../pages/LoginPage";
import { NavigateToFeed } from "../pages/FeedPage";


interface RouterItem {
    path: string,
    Component: FC
}

const privateRoutesArr: RouterItem[] = [
    {
        path: '/',
        Component: NavigateToFeed
    },
    {
        path: '/feed',
        Component: FeedPage
    },
    {
        path: '/profile',
        Component: ProfilePage
    },
    {
        path: '/settings',
        Component: SettingsPage
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
    },
    {
        path: '*',
        Component: ErrorPage
    }
];

export const routesArr = localStorage.getItem('jwt') ? privateRoutesArr : publicRoutesArr