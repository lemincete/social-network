import { FC } from 'react';

import styles from './index.module.scss';

import { useFormContext, RegisterOptions } from 'react-hook-form';

import { ISettingsForm, IInputListItem } from '../../types';

import { getCapitalizeString } from '../../helpers/getCapitalizeString';

import { useAppSelector } from '../../../../hooks/useAppSelector';


const SettingsInputBody: FC<IInputListItem> = ({ name, options }) => {

    const { register } = useFormContext<ISettingsForm>();

    const { user } = useAppSelector(state => state.user);

    if (!user) {
        return null
    }

    return (
        <div className={styles.root}>
            <h3 className={styles.root__title}>{getCapitalizeString(name)}</h3>
            <input defaultValue={name !== 'newPassword' && name !== 'confirmPassword' ? user[name] : ''} {...register(name, options)} className={styles.root__input} type="text" />
        </div>
    );
}

export default SettingsInputBody;