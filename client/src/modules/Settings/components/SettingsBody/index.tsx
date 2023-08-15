import { useState } from 'react';

import styles from './index.module.scss';

import SettingsForm from '../SettingsForm';
import SettingsAvatarBody from '../SettingsAvatarBody';
import SettingsAlertMessage from '../SettingsAlertMessage';


const SettingsBody = () => {

    const [errorResponseMessage, setErrorResponseMessage] = useState<string>('');

    return (
        <div className={styles.root__container}>
            <SettingsAlertMessage message={errorResponseMessage} setMessage={setErrorResponseMessage} />
            <div className={styles.root__body}>
                <h3 className={styles.root__title}>Settings:</h3>
                <div className={styles.root__container__body}>
                    <SettingsAvatarBody />
                    <SettingsForm setResponseMessage={setErrorResponseMessage} />
                </div>
            </div>
        </div>
    )
}

export default SettingsBody;