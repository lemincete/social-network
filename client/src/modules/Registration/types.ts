import { RegisterOptions } from "react-hook-form"

interface IRegistrationProfile {
    name: string,
    surname: string,
    email: string,
    password: string,
}

export interface IProfile extends IRegistrationProfile {
    gender: string
}

export interface IRegistrationForm extends IRegistrationProfile {
    confirmPassword: string,
    otherGender: string
}

export type IFieldsName = 'name' | 'surname' | 'password' | 'email' | 'confirmPassword' | 'otherGender';

export interface IFieldsListItem {
    name: IFieldsName,
    options?: RegisterOptions<IRegistrationForm>,
}
