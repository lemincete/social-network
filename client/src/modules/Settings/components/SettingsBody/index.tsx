import styles from './index.module.scss';

import DefaultAvatar from '../../images/default-avatar.svg';
import Brush from '../../images/brush.svg';
import Update from '../../images/update.svg';

import SettingsInputBody from '../SettingsInputBody';

import { IInputListItem } from '../../types';

import { useAppSelector } from '../../../../hooks/useAppSelector';

const inputsList: IInputListItem[] = [
    {
        name: 'name'
    },
    {
        name: 'surname'
    },
    {
        name: 'gender'
    },
    {
        name: 'email'
    }
]

const SettingsBody = () => {

    const { user } = useAppSelector(state => state.user);

    return (
        <div className={styles.root__container}>
            <div className={styles.root__body}>
                <h3 className={styles.root__title}>Settings:</h3>
                <div className={styles.root__container__body}>
                    <div className={styles.root__avatar__body}>
                        <div className={styles.root__avatar}>
                            <img src={DefaultAvatar} alt="avatar" />
                        </div>
                        <div className={styles.root__avatar__buttons}>
                            <button className={styles.root__photo__btn}>
                                <img src={Update} alt="update" />
                                <span>Update</span>
                            </button>
                            <button className={styles.root__photo__btn}>
                                <img src={Brush} alt="brush" />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                    <form className={styles.root__form}>
                        <div className={styles.root__inputs__body}>
                            {inputsList.map(input =>
                                <SettingsInputBody name={input.name} />
                            )}
                        </div>
                        <div className={styles.root__form__buttons}>
                            <button className={styles.root__form__button}>Cancel</button>
                            <button className={styles.root__form__button}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SettingsBody;