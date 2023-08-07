import { FC } from 'react';

import Loader from './images/loader.svg';

import styles from './index.module.scss';

interface LoginButtonProps {
    loading: boolean
}

const LoginButton: FC<LoginButtonProps> = ({ loading }) => {
    return <button className={styles.root}>
        {loading
            ? <div className={styles.root__loading}>
                <img src={Loader} alt="loader" />
            </div>
            : <>Login</>
        }
    </button>
};

export default LoginButton;