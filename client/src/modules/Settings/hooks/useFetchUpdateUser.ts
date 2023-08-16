import { useFetching } from "../../../hooks/useFetching";
import { useNavigate } from "react-router-dom";
import { useSettingsContext } from "../context/SettingsContext";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addUserAction } from "../../../store/reducers/userReducer";

import { IUser } from "../../../types";

import { fetchUpdateProfile } from "../api/fetchUpdateProfile";


interface IUpdateProfile {
    name: string,
    surname: string,
    gender: string,
    email: string,
    password: string,
    image: string
}


export const useFetchUpdateUser = () => {

    const { setMessage } = useSettingsContext();

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const successfulUpdate = (user: IUser) => {
        dispatch(addUserAction(user));
        navigate('/profile')
    }

    return useFetching(async (profile: IUpdateProfile) => {
        const response = await fetchUpdateProfile(profile);
        typeof response === 'string' ? setMessage(response) : successfulUpdate(response);
    })
}