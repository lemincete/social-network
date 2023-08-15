import $api from "../../../../http";

import { IUser } from "../../../../types";

interface IUpdateProfileForm {
    name: string,
    surname: string,
    gender: string,
    password: string,
    email: string,
    image: string
}

interface IFetchUpdateProfileResponse {
    user: IUser
}


export const fetchUpdateProfile = async (profile: IUpdateProfileForm): Promise<IUser | string> => {
    try {
        const { data } = await $api.post<IFetchUpdateProfileResponse>('profile/update', { ...profile });
        return data.user
    } catch (e: any) {
        return e.response.data.message
    }
}