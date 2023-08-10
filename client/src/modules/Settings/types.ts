import { RegisterOptions } from "react-hook-form";

export interface ISettingsForm {
    [key: string]: string
    name: string;
    surname: string;
    email: string;
    gender: string;
    newPassword: string,
    confirmPassword: string
}

export interface IInputListItem {
    name: 'name' | 'surname' | 'email' | 'gender' | 'newPassword' | 'confirmPassword'
    options?: RegisterOptions<ISettingsForm>
}