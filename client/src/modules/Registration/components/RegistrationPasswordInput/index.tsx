import { useState, FC } from 'react';

import { IRegistrationForm } from '../../types';

import { useFormContext } from 'react-hook-form';

import styles from './index.module.scss';

import OpenEye from './images/open-eye.svg';
import CloseEye from './images/close-eye.svg';

import { IFieldsName } from '../../types';

interface RegistrationInputProps {
    nameField: IFieldsName
}


const RegistrationPasswordInput: FC<RegistrationInputProps> = ({ nameField }) => {

    const [isShow, setIsShow] = useState<boolean>(false);

    const changeShowingPassword = () => {
        setIsShow(!isShow);
        setFocus(nameField);
    }

    const { register, setFocus } = useFormContext<IRegistrationForm>();

    return (
        <div className={styles.root}>
            <input {...register(nameField, { minLength: 8, maxLength: 16 })} required type={isShow ? 'text' : 'password'} className={styles.root__input} />
            <div onClick={changeShowingPassword} className={styles.root__eye__body}>
                <img src={isShow ? OpenEye : CloseEye} alt="eye" />
            </div>
        </div>
    );
};

export default RegistrationPasswordInput;