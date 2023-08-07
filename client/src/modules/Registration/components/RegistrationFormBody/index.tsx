import { FC } from 'react';

import styles from './index.module.scss';

import { IFieldsName, IFieldsListItem } from '../../types';

import RegistrationFormItem from '../RegistrationFormItem';
import RegistrationGenderBody from '../RegistrationGenderBody';

const fieldsList: IFieldsListItem[] = [
    {
        name: 'name',
        options: { pattern: /^[^\d\s]*$/, minLength: 2, maxLength: 14 },
    },
    {
        name: 'surname',
        options: { pattern: /^[^\s\d]*$/, minLength: 2, maxLength: 14 }
    },
    {
        name: 'email',
        options: { pattern: /^\w+@[a-z]+\.[a-z]+$/ }
    }
]

const fieldsPasswordsList: IFieldsName[] = ['password', 'confirmPassword'];


interface RegistrationFormBodyProps {
    gender: string,
    setGender: (gender: string) => void,
    isPasswordsMatched: boolean
}

const RegistrationFormBody: FC<RegistrationFormBodyProps> = ({ gender, setGender, isPasswordsMatched }) => {

    return (
        <div className={styles.root}>
            {fieldsList.map(field =>
                <RegistrationFormItem options={field.options} isPassword={false} name={field.name} key={field.name} isPasswordsMatched={isPasswordsMatched} />
            )}
            {fieldsPasswordsList.map(field =>
                <RegistrationFormItem isPassword={true} name={field} key={field} isPasswordsMatched={isPasswordsMatched} />
            )}
            <RegistrationGenderBody gender={gender} setGender={setGender} />
        </div>
    );
};

export default RegistrationFormBody;