import { useState, FC } from 'react';

import { ISettingsForm } from '../../types';

import { useFormContext } from 'react-hook-form';

import styles from './index.module.scss';

import OpenEye from './images/open-eye.svg';
import CloseEye from './images/close-eye.svg';


interface SettingsInputProps {
    name: "newPassword" | "confirmPassword"
}


const SettingsPasswordInput: FC<SettingsInputProps> = ({ name }) => {

    const [isShow, setIsShow] = useState<boolean>(false);

    const changeShowingPassword = () => {
        setIsShow(!isShow);
        setFocus(name);
    }

    const { register, setFocus } = useFormContext<ISettingsForm>();

    return (
        <div className={styles.root}>
            <h3 className={styles.root__title}>{name === 'newPassword' ? 'New password' : 'Confirm password'}</h3>
            <div className={styles.root__input__body}>
                <input {...register(name, { minLength: 8, maxLength: 16 })} required type={isShow ? 'text' : 'password'} className={styles.root__input} />
                <div onClick={changeShowingPassword} className={styles.root__eye__body}>
                    <img src={isShow ? OpenEye : CloseEye} alt="eye" />
                </div>
            </div>
        </div>
    );
};

export default SettingsPasswordInput;