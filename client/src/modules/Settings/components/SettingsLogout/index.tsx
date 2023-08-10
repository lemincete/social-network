import styles from './index.module.scss';

import Logout from '../../images/logout.svg';

const SettingsLogout = () => {

    const logout = () => {
        localStorage.removeItem('jwt');
        window.location.replace('/')
    }

    return (
        <div onClick={logout} className={styles.root}>
            <div className={styles.root__logout__image}>
                <img src={Logout} alt="logout" />
            </div>
            <span className={styles.root__logout__text}>Logout</span>
        </div>
    );
}

export default SettingsLogout;