import { FC } from "react";

interface RouterItem {
    path: string,
    Component: FC
}

const privateRoutesArr: RouterItem[] = [];

const publicRoutesArr: RouterItem[] = [];

export const routesArr = localStorage.getItem('jwt') ? privateRoutesArr : publicRoutesArr