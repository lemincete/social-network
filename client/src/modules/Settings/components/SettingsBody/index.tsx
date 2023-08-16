import { useState } from 'react';

import styles from './index.module.scss';

import SettingsForm from '../SettingsForm';
import SettingsAlertMessage from '../SettingsAlertMessage';
import SettingsSidebar from '../SettingsSidebar';

import { useAppSelector } from '../../../../hooks/useAppSelector';

import { SettingsContext } from '../../context/SettingsContext';

import Account from '../../images/account.svg';
import Security from '../../images/security.svg';

import { SettingsOptionItem } from '../../types';

const sidebarOptionsList: SettingsOptionItem[] = [
    {
        name: 'Account',
        image: Account
    },
    {
        name: 'Security',
        image: Security
    }
]

const nativeGenders = ['Male', 'Female']


const SettingsBody = () => {

    const [activeOption, setActiveOption] = useState<string>(sidebarOptionsList[0].name);

    const [message, setMessage] = useState<string>('');

    const { user } = useAppSelector(state => state.user);
    const [gender, setGender] = useState<string>(user ? (nativeGenders.includes(user.gender) ? user.gender : 'Other') : '');

    return (
        <div className={styles.root__container}>
            <SettingsAlertMessage />
            <div className={styles.root__body}>
                <h3 className={styles.root__title}>Settings:</h3>
                <div className={styles.root__container__body}>
                    <SettingsContext.Provider value={{ activeOption, setActiveOption, gender, setGender, message, setMessage }}>
                        <SettingsSidebar list={sidebarOptionsList} activeOption={activeOption} setActiveOption={setActiveOption} />
                        <SettingsForm />
                    </SettingsContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default SettingsBody;