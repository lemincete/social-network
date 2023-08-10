import { FC } from 'react';

import { useFormContext } from 'react-hook-form';

import { getCapitalizeString } from '../../helpers/getCapitalizeString';

import { IRegistrationForm, IFieldsName } from '../../types';
import { RegisterOptions } from "react-hook-form"

import styles from './index.module.scss';

import RegistrationPasswordInput from '../RegistrationPasswordInput';
import RegistrationValidationPasswordsBody from '../RegistrationValidationPasswordsBody';
import RegistrationValidationErrorMessage from '../RegistrationValidationErrorMessage';
import RegistrationValidationBody from '../RegistrationValidationBody';


interface RegistrationFormItemProps {
    name: IFieldsName,
    isPassword: boolean,
    isPasswordsMatched: boolean,
    options?: RegisterOptions<IRegistrationForm>
}


const RegistrationFormItem: FC<RegistrationFormItemProps> = ({ name, isPassword, isPasswordsMatched, options }) => {

    const { register, formState: { errors } } = useFormContext<IRegistrationForm>();

    return (
        <div className={styles.root}>
            <h3 className={styles.root__input__title}>{name === 'confirmPassword' ? 'Confirm Password' : getCapitalizeString(name)}</h3>
            {isPassword
                ? <RegistrationPasswordInput nameField={name} />
                : <input required {...register(name, options)} className={styles.root__form__input} type="text" />
            }
            {isPassword
                ? <>
                    {!isPasswordsMatched && <RegistrationValidationErrorMessage>Passwords don't match</RegistrationValidationErrorMessage>}
                    <RegistrationValidationPasswordsBody type={errors[name]?.type} />
                </>
                : <RegistrationValidationBody type={errors[name]?.type} name={name} />
            }
        </div>
    );
};

export default RegistrationFormItem;