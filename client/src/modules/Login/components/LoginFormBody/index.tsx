import styles from './index.module.scss';

import { ILoginForm } from '../../types';

import { useFormContext } from 'react-hook-form';

import LoginPasswordInput from '../LoginPasswordInput';
import LoginValidationErrorMessage from '../LoginValidationErrorMessage';
import LoginValidationPasswordBody from '../LoginValidationPasswordBody';


const LoginFormBody = () => {

    const { register, formState: { errors } } = useFormContext<ILoginForm>();

    return (
        <div className={styles.root}>
            <div className={styles.root__form__email}>
                <h3 className={styles.root__form__input__title}>Email</h3>
                <input required {...register('email', { pattern: /^\w+@[a-z]+\.[a-z]+$/ })} className={styles.root__form__input} type="text" />
                {errors.email?.type === 'pattern' && <LoginValidationErrorMessage>Email can't be has numbers/symbols</LoginValidationErrorMessage>}
            </div>
            <div className={styles.root__form__password}>
                <h3 className={styles.root__form__input__title}>Password</h3>
                <LoginPasswordInput />
                <LoginValidationPasswordBody type={errors.password?.type} />
            </div>
        </div>
    );
};

export default LoginFormBody;