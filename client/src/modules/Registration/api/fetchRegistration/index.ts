import $api from "../../../../http";

import { IProfile } from "../../types";


interface IFetchRegistrationResponse {
    message: boolean
}

export const fetchRegistration = async (profile: IProfile): Promise<{ isError: boolean, message: string }> => {
    try {

        const { name, surname, email, gender, password } = profile;

        const { data } = await $api.post<IFetchRegistrationResponse>('auth/registration', {}, {
            params: { name, surname, email, gender, password }
        })
        return { isError: false, message: String(data.message) }

    } catch (e: any) {
        return { isError: true, message: e.response.data.message }
    }

}