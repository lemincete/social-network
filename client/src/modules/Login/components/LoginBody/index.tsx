import styles from './index.module.scss';

import { useState, useEffect, useRef } from 'react';

import { useFormContext, SubmitHandler } from 'react-hook-form';

import { ILoginForm } from '../../types';

import { fetchLogin } from '../../api/fetchLogin';

import { useFetching } from '../../../../hooks/useFetching';

import Logo from './images/logo.svg';

import LoginButton from '../LoginButton';
import LoginFormBody from '../LoginFormBody';
import { Link } from 'react-router-dom';
import LoginAlertMessage from '../LoginAlertMessage';


const LoginBody = () => {

    const isMounted = useRef<boolean>(false);

    const [responseMessage, setResponseMessage] = useState<string>('');

    const [profile, setProfile] = useState<ILoginForm>({ email: '', password: '' });

    const [loginUser, isLoginLoading] = useFetching(async () => {
        const { isError, message } = await fetchLogin(profile);
        isError ? setResponseMessage(message) : successfulLogin(message)
    });

    const successfulLogin = (jwt: string) => {
        localStorage.setItem('jwt', jwt);
        window.location.replace('/');
    }

    const { handleSubmit } = useFormContext<ILoginForm>();

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        setProfile(data);
    }

    useEffect(() => {
        isMounted.current && loginUser();
        isMounted.current = true
    }, [profile])

    return (
        <div className={styles.root}>
            <LoginAlertMessage message={responseMessage} setMessage={setResponseMessage} />
            <form className={styles.root__form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.root__form__logo}>
                    <img src={Logo} alt="logo" />
                </div>
                <LoginFormBody />
                <LoginButton loading={isLoginLoading} />
                <Link className={styles.root__registration__link} to="/registration">Registration</Link>
            </form>
        </div>
    );
};

export default LoginBody;