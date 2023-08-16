import SettingsAccount from '../SettingsAccount';
import SettingsSecurity from '../SettingsSecurity';

import { useSettingsContext } from '../../context/SettingsContext';

const SettingsChapterBody = () => {

    const { activeOption } = useSettingsContext();

    switch (activeOption) {
        case 'Account':
            return <SettingsAccount />
        case 'Security':
            return <SettingsSecurity />
        default:
            return null
    }
}

export default SettingsChapterBody;