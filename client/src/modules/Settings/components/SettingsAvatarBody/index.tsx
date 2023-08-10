import { ChangeEvent, useState } from 'react';

import styles from './index.module.scss';

import DefaultAvatar from '../../images/default-avatar.svg';
import Brush from '../../images/brush.svg';
import Update from '../../images/update.svg';

import { useAppSelector } from '../../../../hooks/useAppSelector';

import SettingsLogout from '../SettingsLogout';

const SettingsAvatarBody = () => {

    const [previewImagePath, setPreviewImagePath] = useState<string | null>(null);

    const { user } = useAppSelector(state => state.user);


    const changeImage = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files) {
            const urlPreviewImage = URL.createObjectURL(e.target.files[0]);
            setPreviewImagePath(urlPreviewImage);
        }

    }

    return (
        <div className={styles.root}>
            <div className={styles.root__avatar__body}>
                <div className={styles.root__avatar}>
                    <img src={previewImagePath || DefaultAvatar} alt="avatar" />
                </div>
                <div className={styles.root__avatar__buttons}>
                    <input onChange={changeImage} className={styles.root__avatar__input__file} id="#avatarInput" type="file" />
                    <label htmlFor='#avatarInput' className={styles.root__photo__btn}>
                        <img src={Update} alt="update" />
                        <span>Update</span>
                    </label>
                    {user?.image &&
                        <button className={styles.root__photo__btn}>
                            <img src={Brush} alt="brush" />
                            <span>Delete</span>
                        </button>
                    }
                </div>
            </div>
            <SettingsLogout />
        </div>
    );
}

export default SettingsAvatarBody;