import styles from './index.module.scss';

import { CircularProgress } from '@mui/material';

const Loader = () => {
    return (
        <div className={styles.root}>
            <CircularProgress className={styles.root__loader} color="inherit" />
        </div>
    );
}

export default Loader;