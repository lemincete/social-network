import { FC } from 'react';
import styles from './index.module.scss';

import { IRegistrationForm } from '../../types';

import { useFormContext } from 'react-hook-form';

import RegistrationValidationErrorMessage from '../RegistrationValidationErrorMessage';

const genders: string[] = ['Male', 'Female', 'Other'];

interface RegistrationGenderBodyProps {
    gender: string,
    setGender: (gender: string) => void,
}

const RegistrationGenderBody: FC<RegistrationGenderBodyProps> = ({ gender, setGender }) => {

    const { register, formState: { errors } } = useFormContext<IRegistrationForm>();

    return (
        <div className={styles.root}>
            <div className={styles.root__form__gender}>
                {genders.map(gender =>
                    <div key={gender} className={styles.root__form__gender__item}>
                        <label htmlFor={`#${gender}`}>{gender}</label>
                        <input required onChange={() => setGender(gender)} type="radio" id={`#${gender}`} name="gender" />
                    </div>
                )}
            </div>
            {gender === 'Other' &&
                <div className={styles.root__form__other__gender}>
                    <input placeholder='Gender' required {...register('otherGender', { pattern: /^[^\s\d]*$/ })} className={styles.root__form__input} type="text" />
                    {errors.otherGender?.type === 'pattern' && <RegistrationValidationErrorMessage>Gender can't be has numbers/spaces</RegistrationValidationErrorMessage>}
                </div>
            }
        </div>
    );
};

export default RegistrationGenderBody;