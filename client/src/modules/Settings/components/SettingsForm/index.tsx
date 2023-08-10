import styles from './index.module.scss';

import SettingsInputBody from '../SettingsInputBody';
import SettingsPasswordInput from '../SettingsPasswordInput';
import { Link } from 'react-router-dom';

import { useFormContext, SubmitHandler } from 'react-hook-form';

import { ISettingsForm } from '../../types';

const SettingsForm = () => {

    const { handleSubmit } = useFormContext<ISettingsForm>();

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
                <button type="submit" className={styles.root__form__button}>Save</button>
                <Link to="/profile" className={[styles.root__form__button, styles.root__form__button__cancel].join(' ')}>Cancel</Link>
            </div>
        </form>
    );
}

export default SettingsForm;