import { useState } from 'react';

import styles from './index.module.scss';

import SettingsForm from '../SettingsForm';
import SettingsAvatarBody from '../SettingsAvatarBody';

import { SettingsContext } from '../../context/settingsContext';

const SettingsBody = () => {

    const [image, setImage] = useState<string | null | ArrayBuffer>(null);
    const [previewImagePath, setPreviewImagePath] = useState<string | null>(null);

    return (
        <div className={styles.root__container}>
            <div className={styles.root__body}>
                <h3 className={styles.root__title}>Settings:</h3>
                <div className={styles.root__container__body}>
                    <SettingsContext.Provider value={{ image, setImage, previewImagePath, setPreviewImagePath }}>
                        <SettingsAvatarBody />
                        <SettingsForm />
                    </SettingsContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default SettingsBody;