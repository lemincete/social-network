import styles from './index.module.scss';

import SettingsButtonBody from '../SettingsButtonsBody';
import SettingsChapterBody from '../SettingsChapterBody';

import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useIsFormChanged } from '../../hooks/useIsFormChanged';
import { useSettingsContext } from '../../context/SettingsContext';
import { useFetchUpdateUser } from '../../hooks/useFetchUpdateUser';

import { useFormContext, SubmitHandler } from 'react-hook-form';

import { ISettingsForm } from '../../types';


const SettingsForm = () => {

    const { gender } = useSettingsContext();

    const { imageBody } = useAppSelector(state => state.avatar);

    const { handleSubmit } = useFormContext<ISettingsForm>();

    const [fetchUpdateUser, isUpdateUserLoading] = useFetchUpdateUser();

    const isFormChanged = useIsFormChanged(gender);


    const onSubmit: SubmitHandler<ISettingsForm> = data => {
        const { confirmPassword, otherGender, ...profile } = data
        fetchUpdateUser({ ...profile, image: imageBody.image, gender: gender === 'Other' ? otherGender : gender });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.root__form}>
            <SettingsChapterBody />
            <SettingsButtonBody loading={isUpdateUserLoading} isChanged={isFormChanged} />
        </form>
    );
}

export default SettingsForm;