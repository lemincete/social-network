import styles from './index.module.scss';

import SettingsFormItem from '../SettingsFormItem';
import SettingsInputBody from '../SettingsInputBody';
import SettingsGenderBody from '../SettingsGenderBody';


const SettingsAccount = () => {
    return (
        <div className={styles.root}>
            <SettingsFormItem>
                <SettingsInputBody name='name' options={{ pattern: /^[^\d\s]*$/, minLength: 2, maxLength: 14 }} />
                <SettingsInputBody name='surname' options={{ pattern: /^[^\s\d]*$/, minLength: 2, maxLength: 14 }} />
            </SettingsFormItem>
            <SettingsFormItem>
                <SettingsGenderBody />
            </SettingsFormItem>
        </div>
    );
}

export default SettingsAccount;