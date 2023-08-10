import styles from './index.module.scss';

import { useMemo } from 'react';

import SettingsInputBody from '../SettingsInputBody';
import SettingsPasswordInput from '../SettingsPasswordInput';
import { Link } from 'react-router-dom';

import { useIsFormChanged } from '../../hooks/useIsFormChanged';

import { useFormContext, SubmitHandler } from 'react-hook-form';

import { ISettingsForm } from '../../types';

const SettingsForm = () => {

    const { handleSubmit, watch } = useFormContext<ISettingsForm>();

    const watchedFields = {
        name: watch('name'),
        surname: watch('surname'),
        gender: watch('gender'),
        email: watch('email'),
        newPassword: watch('newPassword'),
        confirmPassword: watch('confirmPassword')
    }

    const isFormChanged = useIsFormChanged(watchedFields);

    const rootButtonStyles = [styles.root__form__button];

    isFormChanged && rootButtonStyles.push(styles.active);

    const onSubmit: SubmitHandler<ISettingsForm> = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.root__form}>
            <div className={styles.root__form__item__block}>
                <SettingsInputBody name='name' />
                <SettingsInputBody name='surname' />
            </div>
            <div className={styles.root__form__item__block}>
                <SettingsInputBody name="gender" />
                <SettingsInputBody name="email" />
            </div>
            <div className={styles.root__form__item__block}>
                <SettingsPasswordInput name="newPassword" />
                <SettingsPasswordInput name="confirmPassword" />
            </div>
            <div className={styles.root__form__buttons}>
                <button disabled={!isFormChanged} type="submit" className={rootButtonStyles.join(' ')}>Save</button>
                <button className={styles.root__form__button}>
                    <Link to="/profile" >Cancel</Link>
                </button>
            </div>
        </form>
    );
}

export default SettingsForm;