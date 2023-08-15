import { ChangeEvent, useState, useCallback } from 'react';

import styles from './index.module.scss';

import DefaultAvatar from '../../images/default-avatar.svg';
import Brush from '../../images/brush.svg';
import Update from '../../images/update.svg';

import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { deleteAvatarAction, addAvatarAction } from '../../../../store/reducers/avatarReducer';

import SettingsLogout from '../SettingsLogout';

import { convertToBase64 } from '../../helpers/convertToBase64';


const SettingsAvatarBody = () => {
    const dispatch = useAppDispatch();

    const { user } = useAppSelector(state => state.user);

    const [image, setImage] = useState<string>(user ? user.image : '');

    const { imageBody } = useAppSelector(state => state.avatar);

    const changeImage = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const previewImage = URL.createObjectURL(e.target.files[0]);
            const image = await convertToBase64(e.target.files[0]);

            dispatch(addAvatarAction({ image, previewImage }));
            setImage(previewImage);
        }
    }

    const deleteAvatar = useCallback(() => {
        dispatch(deleteAvatarAction());
        setImage('');
    }, [])


    return (
        <div className={styles.root}>
            <div className={styles.root__avatar__body}>
                <div className={styles.root__avatar}>
                    <img src={image || DefaultAvatar} alt="avatar" />
                </div>
                <div className={styles.root__avatar__buttons}>
                    <input onChange={changeImage} className={styles.root__avatar__input__file} id="#avatarInput" type="file" />
                    <label htmlFor='#avatarInput' className={styles.root__photo__btn}>
                        <span>Update</span>
                        <img src={Update} alt="update" />
                    </label>
                    {(imageBody.previewImage || user?.image) &&
                        <button onClick={deleteAvatar} className={styles.root__photo__btn}>
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