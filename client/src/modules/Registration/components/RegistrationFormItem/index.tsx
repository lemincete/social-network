import { FC } from 'react';

import { useFormContext } from 'react-hook-form';

import { getCapitalizeString } from '../../helpers';

import { IRegistrationForm, IFieldsName } from '../../types';

import styles from './index.module.scss';

import RegistrationInput from '../RegistrationInput';

import RegistrationValidationErrorMessage from '../RegistrationValidationErrorMessage';


interface RegistrationFormItemProps {
    name: IFieldsName,
    isPassword: boolean,
    isPasswordsMatched: boolean
}


const RegistrationFormItem: FC<RegistrationFormItemProps> = ({ name, isPassword, isPasswordsMatched }) => {

    const { register, formState: { errors } } = useFormContext<IRegistrationForm>();

    return (
        <div className={styles.root}>
            <h3 className={styles.root__input__title}>{getCapitalizeString(name)}</h3>
            {isPassword
                ? <RegistrationInput nameField={name} />
                : <input required {...register(name, { pattern: /^[^\d\s]*$/ })} className={styles.root__form__input} type="text" />
            }
            {isPassword
                ? <>
                    {!isPasswordsMatched && <RegistrationValidationErrorMessage>Passwords don't match</RegistrationValidationErrorMessage>}
                </>
                : <>
                    {errors[name]?.type === 'pattern' && <RegistrationValidationErrorMessage>Incorrect {name}</RegistrationValidationErrorMessage>}
                </>
            }
        </div>
    );
};

export default RegistrationFormItem;