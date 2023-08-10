import styles from './index.module.scss';

import SettingsForm from '../SettingsForm';
import SettingsAvatarBody from '../SettingsAvatarBody';

const SettingsBody = () => {

    return (
        <div className={styles.root__container}>
            <div className={styles.root__body}>
                <h3 className={styles.root__title}>Settings:</h3>
                <div className={styles.root__container__body}>
                    <SettingsAvatarBody />
                    <SettingsForm />
                </div>
            </div>
        </div>
    )
}

export default SettingsBody;