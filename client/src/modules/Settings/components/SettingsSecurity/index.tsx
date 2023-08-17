import styles from './index.module.scss';

import SettingsFormItem from '../SettingsFormItem';
import SettingsInputBody from '../SettingsInputBody';
import SettingsPasswordsBody from '../SettingsPasswordsBody';

const SettingsSecurity = () => {
    return (
        <div className={styles.root}>
            <SettingsFormItem>
                <SettingsInputBody required={true} name="email" options={{ pattern: /^\w+@[a-z]+\.[a-z]+$/ }} />
            </SettingsFormItem>
            <SettingsPasswordsBody />
        </div>
    );
}

export default SettingsSecurity;