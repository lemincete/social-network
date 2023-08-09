import axios from "axios";

import { Dispatch } from "@reduxjs/toolkit";

import { addUserAction } from "../../../store/reducers/userReducer";

import { IUser } from "../../../types";

import { API_URLS } from "../../../constants";

interface IFetchProfileRefreshTokenResponse {
    accessToken: string,
    user: IUser
}

export const fetchProfileRefreshToken = async (dispatch: Dispatch, setIsRefresh: (refresh: boolean) => void) => {
    try {
        const { data } = await axios.get<IFetchProfileRefreshTokenResponse>(API_URLS.getProfileRefresh, {
            withCredentials: true,
        })

        localStorage.setItem('jwt', data.accessToken);
        dispatch(addUserAction(data.user));

    } catch (e) {
        localStorage.removeItem('jwt');
        window.location.replace('/')
    } finally {
        setIsRefresh(true);
    }
}