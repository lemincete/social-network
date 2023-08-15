import { RegisterOptions } from "react-hook-form";

export interface ISettingsProfile {
    [key: string]: string
    name: string;
    surname: string;
    email: string;
    gender: string;
    password: string,
    confirmPassword: string
}

export type ISettingsForm = Omit<ISettingsProfile, 'gender'> & {
    otherGender: string,
    confirmPassword: string
}

export type IFieldsName = 'name' | 'surname' | 'email' | 'gender' | 'password' | 'confirmPassword';

export interface IInputListItem {
    name: IFieldsName;
    options?: RegisterOptions<ISettingsForm>;
}