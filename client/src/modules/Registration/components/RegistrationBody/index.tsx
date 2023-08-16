import { SubmitHandler, useFormContext } from 'react-hook-form';
import { usePasswordsMatched } from '../../hooks/usePasswordsMatched';
import { useState } from 'react';

import { IRegistrationForm } from '../../types';

import styles from './index.module.scss';

import Logo from './images/logo.svg';

import { Link } from 'react-router-dom';
import RegistrationButton from '../RegistrationButton';
import RegistrationFormBody from '../RegistrationFormBody';
import RegistrationAlertMessage from '../RegistrationAlertMessage';
import { useRegisterUser } from '../../hooks/useRegisterUser';


const RegistrationBody = () => {

    const [responseMessage, setResponseMessage] = useState<string>('');
    const [gender, setGender] = useState<string>('');

    const [registerUser, isRegistrationLoading] = useRegisterUser(setResponseMessage);

    const { handleSubmit, watch } = useFormContext<IRegistrationForm>();

    const isPasswordsMatched = usePasswordsMatched(watch(['password', 'confirmPassword']));

    const onSubmit: SubmitHandler<IRegistrationForm> = data => {
        if (isPasswordsMatched) {
            const { otherGender, confirmPassword, ...profile } = data;
            registerUser({ ...profile, gender: gender === 'Other' ? otherGender : gender })
        }
    }

    return (
        <div className={styles.root}>
            <RegistrationAlertMessage message={responseMessage} setMessage={setResponseMessage} />
            <form className={styles.root__form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.root__form__logo}>
                    <img src={Logo} alt="logo" />
                </div>
                <RegistrationFormBody gender={gender} setGender={setGender} isPasswordsMatched={isPasswordsMatched} />
                <RegistrationButton loading={isRegistrationLoading} />
                <Link className={styles.root__login__link} to="/login">Login</Link>
            </form>
        </div>
    );
};

export default RegistrationBody;