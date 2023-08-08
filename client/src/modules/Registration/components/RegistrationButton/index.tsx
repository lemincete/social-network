import { FC } from 'react';

import styles from './index.module.scss';

import { CircularProgress } from '@mui/material';

interface RegistrationButtonProps {
    loading: boolean
}

const RegistrationButton: FC<RegistrationButtonProps> = ({ loading }) => {
    return <button className={styles.root}>
        {loading
            ? <div className={styles.root__loader}>
                <CircularProgress color="inherit" />
            </div>
            : <>Register</>
        }
    </button>
};

export default RegistrationButton;