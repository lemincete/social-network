import { ChangeEvent, useState } from 'react';

import { useSettingsContext } from '../../context/settingsContext';

import styles from './index.module.scss';

import DefaultAvatar from '../../images/default-avatar.svg';
import Brush from '../../images/brush.svg';
import Update from '../../images/update.svg';

import { useAppSelector } from '../../../../hooks/useAppSelector';

import SettingsLogout from '../SettingsLogout';

import { convertToBase64 } from '../../helpers/convertToBase64';


const SettingsAvatarBody = () => {

    const { image, setImage, previewImagePath, setPreviewImagePath } = useSettingsContext();

    const { user } = useAppSelector(state => state.user);

    const changeImage = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const urlPreviewImage = URL.createObjectURL(e.target.files[0]);
            setPreviewImagePath(urlPreviewImage);
            const file = await convertToBase64(e.target.files[0]);
            setImage(file);
        }
    }

    const deleteImage = () => {
        setImage(null);
        setPreviewImagePath(null);
    }

    return (
        <div className={styles.root}>
            <div className={styles.root__avatar__body}>
                <div className={styles.root__avatar}>
                    <img src={user?.image || previewImagePath || DefaultAvatar} alt="avatar" />
                </div>
                <div className={styles.root__avatar__buttons}>
                    <input onChange={changeImage} className={styles.root__avatar__input__file} id="#avatarInput" type="file" />
                    <label htmlFor='#avatarInput' className={styles.root__photo__btn}>
                        <span>Update</span>
                        <img src={Update} alt="update" />
                    </label>
                    {(user?.image || previewImagePath) &&
                        <button onClick={deleteImage} className={styles.root__photo__btn}>
                            <span>Delete</span>
                            <img src={Brush} alt="brush" />
                        </button>
                    }
                </div>
            </div>
            <SettingsLogout />
        </div>
    );
}

export default SettingsAvatarBody;