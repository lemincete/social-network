import { useState, FC } from 'react';

import styles from './index.module.scss';

import SettingsInputBody from '../SettingsInputBody';
import SettingsPasswordsBody from '../SettingsPasswordsBody';
import SettingsGenderBody from '../SettingsGenderBody';
import { useNavigate } from 'react-router-dom';
import SettingsButtonBody from '../SettingsButtonsBody';

import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { addUserAction } from '../../../../store/reducers/userReducer';

import { useIsFormChanged } from '../../hooks/useIsFormChanged';

import { useFormContext, SubmitHandler } from 'react-hook-form';

import { ISettingsForm } from '../../types';

import { useFetching } from '../../../../hooks/useFetching';

import { fetchUpdateProfile } from '../../api/fetchUpdateProfile';
import { IUser } from '../../../../types';

interface IUpdateProfile {
    name: string,
    surname: string,
    gender: string,
    email: string,
    password: string,
    image: string
}

const nativeGenders = ['Male', 'Female']

interface SettingsFormProps {
    setResponseMessage: (message: string) => void
}

const SettingsForm: FC<SettingsFormProps> = ({ setResponseMessage }) => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { imageBody } = useAppSelector(state => state.avatar);
    const { user } = useAppSelector(state => state.user);

    const { handleSubmit } = useFormContext<ISettingsForm>();

    const [gender, setGender] = useState<string>(user ? (nativeGenders.includes(user.gender) ? user.gender : 'Other') : '');

    const [fetchUpdateUser, isUpdateUserLoading] = useFetching(async (profile: IUpdateProfile) => {
        const response = await fetchUpdateProfile(profile);
        typeof response === 'string' ? setResponseMessage(response) : successfulUpdate(response);
    })

    const successfulUpdate = (user: IUser) => {
        dispatch(addUserAction(user));
        navigate('/profile')
    }

    const isFormChanged = useIsFormChanged(gender);

    const onSubmit: SubmitHandler<ISettingsForm> = data => {

        const { confirmPassword, otherGender, ...profile } = data

        fetchUpdateUser({ ...profile, image: imageBody.image, gender: gender === 'Other' ? otherGender : gender });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.root__form}>
            <div className={styles.root__form__item__block}>
                <SettingsInputBody name='name' options={{ pattern: /^[^\d\s]*$/, minLength: 2, maxLength: 14 }} />
                <SettingsInputBody name='surname' options={{ pattern: /^[^\s\d]*$/, minLength: 2, maxLength: 14 }} />
            </div>
            <div className={styles.root__form__item__block}>
                <SettingsInputBody name="email" options={{ pattern: /^\w+@[a-z]+\.[a-z]+$/ }} />
            </div>
            <div className={styles.root__form__item__block}>
                <SettingsGenderBody gender={gender} setGender={setGender} />
            </div>
            <SettingsPasswordsBody />
            <SettingsButtonBody loading={isUpdateUserLoading} isChanged={isFormChanged} />
        </form>
    );
}

export default SettingsForm;