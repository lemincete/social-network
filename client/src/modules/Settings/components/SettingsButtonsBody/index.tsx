import { FC } from 'react';

import styles from './index.module.scss';

import { CircularProgress } from '@mui/material';

import { Link } from 'react-router-dom';

interface SettingsButtonBodyProps {
    isChanged: boolean,
    loading: boolean
}

const SettingsButtonBody: FC<SettingsButtonBodyProps> = ({ isChanged, loading }) => {

    const rootButtonStyles = [styles.root__button];

    isChanged && rootButtonStyles.push(styles.active);

    return (
        <div className={styles.root__buttons}>
            <button disabled={!isChanged} type="submit" className={rootButtonStyles.join(' ')}>
                {loading
                    ? <div className={styles.root__loader}>
                        <CircularProgress color="inherit" />
                    </div>
                    : <>Save</>
                }
            </button>
            <button className={styles.root__button}>
                <Link to="/profile" >Cancel</Link>
            </button>
        </div>
    );
}

export default SettingsButtonBody;