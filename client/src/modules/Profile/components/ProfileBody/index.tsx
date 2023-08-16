import { useState, useEffect, FC } from 'react';

import { useFetching } from '../../../../hooks/useFetching';
import { useAppSelector } from '../../../../hooks/useAppSelector';

import { Link } from 'react-router-dom';

import DefaultAvatar from '../../images/default-avatar.svg';
import Arrow from '../../images/arrow.svg';

import { fetchSubs } from '../../api/fetchSubs';

import { ISubs } from '../../../../types';

import styles from './index.module.scss';

interface ProfileBodyProps {
    setErrorMessage: (message: string) => void
}

const ProfileBody: FC<ProfileBodyProps> = ({ setErrorMessage }) => {

    const [subs, setSubs] = useState<ISubs>();

    const { user } = useAppSelector(state => state.user);

    const [fetchMySubs] = useFetching(async () => {
        const response = await fetchSubs();
        typeof response === 'string' ? setErrorMessage(response) : setSubs(response)
    })

    useEffect(() => {
        fetchMySubs();
    }, [])


    return (
        <div className={styles.root}>
            <div className={styles.root__top}>
                <div className={styles.root__top__body}>
                    <div className={styles.root__top__avatar}>
                        <img src={user?.image || DefaultAvatar} alt="avatar" />
                    </div>
                    <div className={styles.root__top__profile__info}>
                        <div className={styles.root__top__profile__nickname}>{user?.name} {user?.surname}</div>
                        <div className={styles.root__top__profile__bio}>
                            {user?.bio
                                ? user?.bio
                                : <Link to="/settings" className={styles.root__top__profile__bio__edit}>
                                    <span>Add your bio now!</span>
                                    <div className={styles.root__top__profile__bio_edit__arrow}>
                                        <img src={Arrow} alt="arrow" />
                                    </div>
                                </Link>}
                        </div>
                    </div>
                </div>
                <div className={styles.root__top__info}>
                    <div className={styles.root__top__info__body}>
                        <div className={styles.root__top__info__item}>
                            <span className={styles.root__top__info__item__counter}>0</span>
                            <h4 className={styles.root__top__info__item__title}>Subscribers</h4>
                        </div>
                        <div className={styles.root__top__info__item}>
                            <span className={styles.root__top__info__item__counter}>0</span>
                            <h4 className={styles.root__top__info__item__title}>Posts</h4>
                        </div>
                    </div>
                    <div className={styles.root__top__info__buttons}>
                        <Link to="/settings" className={styles.root__top__button}>Edit profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileBody;