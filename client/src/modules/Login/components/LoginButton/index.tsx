import { FC } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import styles from './index.module.scss';

interface LoginButtonProps {
    loading: boolean
}

const LoginButton: FC<LoginButtonProps> = ({ loading }) => {
    return <button className={styles.root}>
        {loading
            ? <div className={styles.root__loader}>
                <CircularProgress color="inherit" />
            </div>
            : <>Login</>
        }
    </button>
};

export default LoginButton;