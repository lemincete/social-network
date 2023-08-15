import { useState, FC } from 'react';

import { ISettingsForm } from '../../types';

import { useFormContext } from 'react-hook-form';

import SettingsValidationBody from '../SettingsValidationBody';
import SettingsValidationErrorMessage from '../SettingsValidationErrorMessage';

import styles from './index.module.scss';

import OpenEye from './images/open-eye.svg';
import CloseEye from './images/close-eye.svg';


interface SettingsInputProps {
    name: "password" | "confirmPassword",
    isMatched: boolean,
    required: boolean
}


const SettingsPasswordInput: FC<SettingsInputProps> = ({ name, isMatched, required }) => {

    const [isShow, setIsShow] = useState<boolean>(false);

    const changeShowingPassword = () => {
        setIsShow(!isShow);
        setFocus(name);
    }

    const { register, setFocus, formState: { errors } } = useFormContext<ISettingsForm>();

    const formattedName = name === 'confirmPassword' ? 'Confirm password' : 'New password';

    return (
        <div className={styles.root}>
            <h3 className={styles.root__title}>{formattedName}</h3>
            <div className={styles.root__input__body}>
                <input {...register(name, { minLength: 8, maxLength: 16 })} type={isShow ? 'text' : 'password'} className={styles.root__input} required={required} />
                <div onClick={changeShowingPassword} className={styles.root__eye__body}>
                    <img src={isShow ? OpenEye : CloseEye} alt="eye" />
                </div>
            </div>
            {!isMatched && <SettingsValidationErrorMessage>Passwords don't match</SettingsValidationErrorMessage>}
            <SettingsValidationBody name="password" type={errors[name]?.type} />
        </div>
    );
};

export default SettingsPasswordInput;