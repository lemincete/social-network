import { useState } from 'react';

import styles from './index.module.scss';

import Logo from './images/logo.svg';
import Settings from './images/settings.svg';
import Logout from './images/logout.svg';
import Question from './images/question.svg';
import Test from './images/test.jpg';
import Arrow from './images/arrow.svg';

import { Link } from 'react-router-dom';
import HeaderAccountBody from './components/HeaderAccountBody';


const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);


    const logout = async () => {
        localStorage.removeItem('jwt');
        window.location.reload();
    }

    return (
        <header className={styles.root}>
            <div className="container">
                <div className={styles.root__body}>
                    <Link to="/" className={styles.root__logo}>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <HeaderAccountBody setIsHover={setIsHover} setIsOpen={setIsOpen} isOpen={isOpen} isHover={isHover} />
                    {isOpen && <div className={styles.root__account__popup}>
                        <div className={styles.root__account__popup_account_info}>
                            <div className={styles.root__account__avatar}>
                                <img src={Test} alt="avatar" />
                            </div>
                            <div className={styles.root__account__popup_account_info_body}>
                                <div className={styles.root__account__popup_account_info_body_nickname}>Oleg Vinnik</div>
                                <Link to="/profile" className={styles.root__account__popup_account_info_body_link}>
                                    <div className={styles.root__account__popup_body_link_body}>Go to your profile!</div>
                                    <div className={styles.root__account__popup_body_link_body_arrow}>
                                        <img src={Arrow} alt="arrow" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <ul className={styles.root__account__popup__menu}>
                            <li>
                                <Link to="/settings" className={styles.root__account__popup__menu__item}>
                                    <div className={styles.root__account__popup__menu__image}>
                                        <img src={Settings} alt="settings" />
                                    </div>
                                    <div className={styles.root__account__popup__menu__text}>Settings</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/support" className={styles.root__account__popup__menu__item}>
                                    <div className={styles.root__account__popup__menu__image}>
                                        <img src={Question} alt="question" />
                                    </div>
                                    <div className={styles.root__account__popup__menu__text}>Support</div>
                                </Link>
                            </li>
                            <li>
                                <div onClick={logout} className={styles.root__account__popup__menu__item}>
                                    <div className={styles.root__account__popup__menu__image}>
                                        <img src={Logout} alt="logout" />
                                    </div>
                                    <div className={styles.root__account__popup__menu__text}>Logout</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;