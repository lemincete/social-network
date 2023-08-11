import styles from './index.module.scss';

import Settings from '../../images/settings.svg';
import Logout from '../../images/logout.svg';
import Question from '../../images/question.svg';
import Arrow from '../../images/arrow.svg';
import Palette from '../../images/palette.svg';
import DefaultAvatar from '../../images/default-avatar.svg';

import { useAppSelector } from '../../../../hooks/useAppSelector';

import { Link } from 'react-router-dom';

import HeaderAccountBodyThemePopup from '../HeaderAccountBodyThemePopup';


const HeaderAccountPopup = () => {

    const logout = () => {
        localStorage.removeItem('jwt');
        window.location.replace('/');
    }

    const { user } = useAppSelector(state => state.user);

    return (
        <div className={styles.root__account__popup}>
            <div className={styles.root__account__popup_account_info}>
                <div className={styles.root__account__avatar}>
                    <img src={user?.image || DefaultAvatar} alt="avatar" />
                </div>
                <div className={styles.root__account__popup_account_info_body}>
                    <div className={styles.root__account__popup_account_info_body_nickname}>{user?.name} {user?.surname}</div>
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
                    <div className={styles.root__account__popup__menu__item}>
                        <div className={styles.root__account__popup__menu__image}>
                            <img src={Palette} alt="palette" />
                        </div>
                        <HeaderAccountBodyThemePopup />
                    </div>
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
    );
};

export default HeaderAccountPopup;