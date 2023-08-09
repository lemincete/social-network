import axios, { AxiosResponse } from 'axios';

import { API_URL } from '../constants';

import { API_URLS } from '../constants';
import { IUser } from '../types';

interface IRefreshTokenResponse {
    accessToken: string,
    user: IUser
}

const refreshToken = async () => {
    try {
        const { data } = await axios.get<IRefreshTokenResponse>(API_URLS.getProfileRefresh, {
            withCredentials: true
        })

        return data.accessToken
    } catch (e) {
        return null
    }
}


const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
})

$api.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return req;
})

$api.interceptors.response.use((res: AxiosResponse) => {
    return res
}, async (err) => {
    const originalRequest = err.config;

    if (err.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        const token = await refreshToken();

        if (token) {
            localStorage.setItem('jwt', token);
        } else {
            localStorage.removeItem('jwt');
            window.location.replace('/');
        }

        return $api(originalRequest);
    }

    throw err
})

export default $api