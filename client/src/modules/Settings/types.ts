import { RegisterOptions } from "react-hook-form";

export interface ISettingsForm {
    name: string;
    surname: string;
    email: string;
    gender: string;
}

export interface IInputListItem {
    name: 'name' | 'surname' | 'email' | 'gender'
    options?: RegisterOptions<ISettingsForm>
}