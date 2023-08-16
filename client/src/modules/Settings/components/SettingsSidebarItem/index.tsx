import { FC } from 'react';

import styles from './index.module.scss';

interface SettingsSidebarItemProps {
    name: string,
    image: string,
    activeOption: string,
    setActiveOption: (option: string) => void
}

const SettingsSidebarItem: FC<SettingsSidebarItemProps> = ({ name, image, activeOption, setActiveOption }) => {

    const rootSidebarOptionStyles = [styles.root__item, styles.root__item__active];

    return (
        <div className={styles.root}>
            <div onClick={() => setActiveOption(name)} className={name === activeOption ? rootSidebarOptionStyles.join(' ') : styles.root__item}>
                <div className={styles.root__item__image}>
                    <img src={image} alt={name} />
                </div>
                <span className={styles.root__item__name}>{name}</span>
            </div>
        </div>
    );
}

export default SettingsSidebarItem;