import { FC } from 'react';

import styles from './index.module.scss';

import SettingsSidebarItem from '../SettingsSidebarItem';
import SettingsLogout from '../SettingsLogout';

import { SettingsOptionItem } from '../../types';

interface SettingsSidebarProps {
    list: SettingsOptionItem[],
    activeOption: string,
    setActiveOption: (option: string) => void
}

const SettingsSidebar: FC<SettingsSidebarProps> = ({ list, activeOption, setActiveOption }) => {


    return (
        <div className={styles.root}>
            <div className={styles.root__options}>
                {list.map(item =>
                    <SettingsSidebarItem key={item.name} name={item.name} image={item.image} activeOption={activeOption} setActiveOption={setActiveOption} />
                )}
            </div>
            <SettingsLogout />
        </div>
    );
}

export default SettingsSidebar;