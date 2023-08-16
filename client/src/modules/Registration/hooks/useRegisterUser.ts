import { useFetching } from "../../../hooks/useFetching";
import { useNavigate } from "react-router-dom";

import { fetchRegistration } from "../api/fetchRegistration";

import { IProfile } from "../types";

export const useRegisterUser = (setResponseMessage: (message: string) => void) => {

    const navigate = useNavigate();

    return useFetching(async (profile: IProfile) => {
        const { isError, message } = await fetchRegistration(profile);
        isError ? setResponseMessage(message) : navigate('/login')
    })
}