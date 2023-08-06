import { FC } from 'react';

import Loader from './images/loader.svg';

import styles from './index.module.scss';

interface RegistrationButtonProps {
    loading: boolean
}

const RegistrationButton: FC<RegistrationButtonProps> = ({ loading }) => {
    return <button className={styles.root}>
        {loading
            ? <div className={styles.root__loading}>
                <img src={Loader} alt="loader" />
            </div>
            : <>Register</>
        }
    </button>
};

export default RegistrationButton;