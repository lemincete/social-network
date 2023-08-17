import styles from './index.module.scss';

import SettingsFormItem from '../SettingsFormItem';
import SettingsInputBody from '../SettingsInputBody';
import SettingsGenderBody from '../SettingsGenderBody';
import SettingsAvatarBody from '../SettingsAvatarBody';


const SettingsAccount = () => {
    return (
        <div className={styles.root}>
            <SettingsAvatarBody />
            <div className={styles.root__body}>
                <SettingsFormItem>
                    <SettingsInputBody required={true} name='name' options={{ pattern: /^[^\d\s]*$/, minLength: 2, maxLength: 14 }} />
                    <SettingsInputBody required={true} name='surname' options={{ pattern: /^[^\s\d]*$/, minLength: 2, maxLength: 14 }} />
                </SettingsFormItem>
                <SettingsFormItem>
                    <SettingsInputBody required={false} name="bio" />
                </SettingsFormItem>
                <SettingsFormItem>
                    <SettingsGenderBody />
                </SettingsFormItem>
            </div>
        </div>
    );
}

export default SettingsAccount;