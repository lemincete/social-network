import { ChangeEvent, useState, useCallback } from 'react';

import styles from './index.module.scss';

import DefaultAvatar from '../../images/default-avatar.svg';
import Brush from '../../images/brush.svg';
import Update from '../../images/update.svg';

import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { deleteAvatarAction, addAvatarAction } from '../../../../store/reducers/avatarReducer';

import { convertToBase64 } from '../../helpers/convertToBase64';


const SettingsAvatarBody = () => {
    const dispatch = useAppDispatch();

    const { user } = useAppSelector(state => state.user);

    const [open, setOpen] = useState<boolean>(false);

    const [image, setImage] = useState<string>(user ? user.image : '');

    const { imageBody } = useAppSelector(state => state.avatar);

    const changeImage = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const previewImage = URL.createObjectURL(e.target.files[0]);
            const image = await convertToBase64(e.target.files[0]);

            dispatch(addAvatarAction({ image, previewImage }));
            setImage(previewImage);

            setOpen(false);
        }
    }

    const deleteAvatar = useCallback(() => {
        dispatch(deleteAvatarAction());
        setImage('');
        setOpen(false);
    }, [])


    return (
        <div className={styles.root}>
            <div className={styles.root__avatar__body}>
                <div className={styles.root__avatar}>
                    <img onClick={() => setOpen(!open)} src={image || DefaultAvatar} alt="avatar" />
                    {open &&
                        <div className={styles.root__avatar__menu}>
                            <div className={styles.root__avatar__menu__update}>
                                <input onChange={changeImage} className={styles.root__avatar__input__file} id="#avatarInput" type="file" />
                                <label htmlFor='#avatarInput' className={styles.root__photo__btn}>
                                    <img src={Update} alt="update" />
                                    <span>Update</span>
                                </label>
                            </div>
                            {(imageBody.previewImage || user?.image) &&
                                <div className={styles.root__avatar__menu__delete}>
                                    <button onClick={deleteAvatar} className={styles.root__photo__btn}>
                                        <img src={Brush} alt="brush" />
                                        <span>Delete</span>
                                    </button>
                                </div>
                            }
                        </div>}
                </div>
            </div>
        </div>
    );
}

export default SettingsAvatarBody;