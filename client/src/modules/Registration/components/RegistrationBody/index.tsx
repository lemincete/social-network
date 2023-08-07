import { SubmitHandler, useFormContext } from 'react-hook-form';
import { usePasswordsMatched } from '../../hooks/usePasswordsMatched';
import { useEffect, useState, useRef } from 'react';
import { useFetching } from '../../../../hooks/useFetching';

import { fetchRegistration } from '../../api/fetchRegistration';

import { IProfile, IRegistrationForm } from '../../types';

import styles from './index.module.scss';

import Logo from './images/logo.svg';

import RegistrationButton from '../RegistrationButton';

import RegistrationFormBody from '../RegistrationFormBody';



const RegistrationBody = () => {

    const isMounted = useRef<boolean>(false);

    const [profile, setProfile] = useState<IProfile>({ name: '', password: '', gender: '', surname: '', email: '' });


    const [registerUser, isRegistrationLoading] = useFetching(async () => {
        fetchRegistration(profile);
    })

    const [gender, setGender] = useState<string>('');

    const { handleSubmit, watch } = useFormContext<IRegistrationForm>();

    const isPasswordsMatched = usePasswordsMatched(watch(['password', 'confirmPassword']));

    const onSubmit: SubmitHandler<IRegistrationForm> = data => {

        if (isPasswordsMatched) {
            const { otherGender, confirmPassword, ...profile } = data;
            setProfile({ ...profile, gender: gender === 'Other' ? otherGender : gender });
        }
    }


    useEffect(() => {
        isMounted.current && registerUser();
        isMounted.current = true;

    }, [profile])

    return (
        <div className={styles.root}>
            <form className={styles.root__form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.root__form__logo}>
                    <img src={Logo} alt="logo" />
                </div>
                <RegistrationFormBody gender={gender} setGender={setGender} isPasswordsMatched={isPasswordsMatched} />
                <RegistrationButton loading={isRegistrationLoading} />
            </form>
        </div>
    );
};

export default RegistrationBody;