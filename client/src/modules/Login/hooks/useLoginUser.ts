import { useFetching } from "../../../hooks/useFetching";

import { fetchLogin } from "../api/fetchLogin";

import { ILoginForm } from "../types";

export const useLoginUser = (setResponseMessage: (message: string) => void) => {

    const successfulLogin = (jwt: string) => {
        localStorage.setItem('jwt', jwt);
        window.location.replace('/');
    }

    return useFetching(async (profile: ILoginForm) => {
        const { isError, message } = await fetchLogin(profile);
        isError ? setResponseMessage(message) : successfulLogin(message)
    });
}