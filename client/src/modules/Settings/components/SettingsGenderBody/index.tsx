import styles from './index.module.scss';

import { ISettingsForm } from '../../types';

import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useFormContext } from 'react-hook-form';
import { useSettingsContext } from '../../context/SettingsContext';

import SettingsValidationErrorMessage from '../SettingsValidationErrorMessage';

const genders: string[] = ['Male', 'Female', 'Other'];



const SettingsGenderBody = () => {

    const { user } = useAppSelector(state => state.user);

    const { reset, register, formState: { errors } } = useFormContext<ISettingsForm>();

    const { gender, setGender } = useSettingsContext();

    const changeGender = (gender: string) => {
        reset({ otherGender: '' });
        setGender(gender);
    }

    return (
        <div className={styles.root}>
            <div className={styles.root__form__gender}>
                {genders.map(item =>
                    <div key={item} className={styles.root__form__gender__item}>
                        <label htmlFor={`#${item}`}>{item}</label>
                        <input checked={gender === item} required onChange={() => changeGender(item)} type="radio" id={`#${item}`} name="gender" />
                    </div>
                )}
            </div>
            {gender === 'Other' &&
                <div className={styles.root__form__gender__other}>
                    <input defaultValue={user?.gender} placeholder='Gender' required {...register('otherGender', { pattern: /^[^\s\d]*$/ })} className={styles.root__form__input} type="text" />
                    {errors.otherGender?.type === 'pattern' && <SettingsValidationErrorMessage>Gender can't be has numbers/symbols</SettingsValidationErrorMessage>}
                </div>
            }
        </div>
    );
};

export default SettingsGenderBody;