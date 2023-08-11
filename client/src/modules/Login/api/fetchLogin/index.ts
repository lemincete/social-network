import $api from "../../../../http";
import { ILoginForm } from "../../types";

interface IFetchLoginResponse {
    accessToken: string
}

export const fetchLogin = async (profile: ILoginForm): Promise<{ isError: boolean, message: string }> => {
    try {

        const { data } = await $api.post<IFetchLoginResponse>('auth/login', {}, {
            params: { ...profile }
        })

        return { isError: false, message: data.accessToken }

    } catch (e: any) {
        return { isError: true, message: e.response.data.message }
    }
}