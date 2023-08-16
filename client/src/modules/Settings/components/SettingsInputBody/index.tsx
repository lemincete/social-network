import { FC } from 'react';

import SettingsValidationBody from '../SettingsValidationBody';

import { capitalizeString } from '../../helpers/capitalizeString';

import styles from './index.module.scss';

import { useFormContext } from 'react-hook-form';
import { useAppSelector } from '../../../../hooks/useAppSelector';

import { ISettingsForm, IInputListItem } from '../../types';



const SettingsInputBody: FC<IInputListItem> = ({ name, options }) => {

    const { register, formState: { errors } } = useFormContext<ISettingsForm>();

    const { user } = useAppSelector(state => state.user);

    if (!user) {
        return null
    }

    return (
        <div className={styles.root}>
            <h3 className={styles.root__title}>{capitalizeString(name)}</h3>
            <input required defaultValue={name !== 'password' && name !== 'confirmPassword' ? user[name] : ''} {...register(name, options)} className={styles.root__input} type="text" />
            <SettingsValidationBody type={errors[name]?.type} name={name} />
        </div>
    );
}

export default SettingsInputBody;