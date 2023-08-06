import { useState } from 'react';

import styles from './index.module.scss';

import Logo from './images/logo.svg';

import { Link } from 'react-router-dom';
import HeaderAccountBody from './components/HeaderAccountBody';
import HeaderAccountPopup from './components/HeaderAccountPopup';


const Header = () => {

    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);


    return (
        <header className={styles.root}>
            <div className="container">
                <div className={styles.root__body}>
                    <Link to="/" className={styles.root__logo}>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <HeaderAccountBody setIsHover={setIsHover} setIsOpen={setIsOpenPopup} isOpen={isOpenPopup} isHover={isHover} />
                    {isOpenPopup && <HeaderAccountPopup />}
                </div>
            </div>
        </header>
    );
};

export default Header;