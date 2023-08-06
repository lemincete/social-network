import { useState, ChangeEvent } from 'react';
import styles from './index.module.scss';

const HeaderAccountBodyThemePopup = () => {

    const themes = ['Light', 'Dark'];

    const [activeTheme, setActiveTheme] = useState<string>(themes[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    console.log(activeTheme);

    const chooseTheme = (theme: string) => {
        setIsOpen(false);
        setActiveTheme(theme);
    }

    const rootThemeClasses = [styles.root__theme]

    isOpen && rootThemeClasses.push(styles.active);

    return (
        <div className={styles.root}>
            <div className={styles.root__text}>Theme: </div>
            <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setActiveTheme(e.target.value)} className={styles.root__menu}>
                {themes.map(theme =>
                    <option key={theme} value={theme}>{theme}</option>
                )}
            </select>
        </div>
    );
};

export default HeaderAccountBodyThemePopup;