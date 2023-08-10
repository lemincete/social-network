import styles from './index.module.scss';

import DefaultAvatar from '../../images/default-avatar.svg';
import Brush from '../../images/brush.svg';
import Update from '../../images/update.svg';

import { useAppSelector } from '../../../../hooks/useAppSelector';

const SettingsAvatarBody = () => {

    const { user } = useAppSelector(state => state.user);

    return (
        <div className={styles.root__avatar__body}>
            <div className={styles.root__avatar}>
                <img src={DefaultAvatar} alt="avatar" />
            </div>
            <div className={styles.root__avatar__buttons}>
                <button className={styles.root__photo__btn}>
                    <img src={Update} alt="update" />
                    <span>Update</span>
                </button>
                {user?.image &&
                    <button className={styles.root__photo__btn}>
                        <img src={Brush} alt="brush" />
                        <span>Delete</span>
                    </button>
                }
            </div>
        </div>
    );
}

export default SettingsAvatarBody;