import { useState } from 'react';

import { ILoginForm } from '../../types';

import { useFormContext } from 'react-hook-form';

import styles from './index.module.scss';

import OpenEye from './images/open-eye.svg';
import CloseEye from './images/close-eye.svg';


const LoginPasswordInput = () => {

    const [isShow, setIsShow] = useState<boolean>(false);

    const changeShowingPassword = () => {
        setIsShow(!isShow);
        setFocus('password');
    }

    const { register, setFocus } = useFormContext<ILoginForm>();

    return (
        <div className={styles.root}>
            <input {...register('password', { minLength: 8, maxLength: 16 })} required type={isShow ? 'text' : 'password'} className={styles.root__input} />
            <div onClick={changeShowingPassword} className={styles.root__eye__body}>
                <img src={isShow ? OpenEye : CloseEye} alt="eye" />
            </div>
        </div>
    );
};

export default LoginPasswordInput;