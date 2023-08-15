import { FC } from 'react';

import RegistrationValidationErrorMessage from '../RegistrationValidationErrorMessage';

import { IFieldsName } from '../../types';

interface RegistrationValidationBodyProps {
    type?: string,
    name: IFieldsName,
}

const RegistrationValidationBody: FC<RegistrationValidationBodyProps> = ({ type, name }) => {
    switch (type) {
        case 'pattern':
            return <RegistrationValidationErrorMessage>Incorrect {name} </RegistrationValidationErrorMessage>
        case 'minLength':
            return <RegistrationValidationErrorMessage>The {name} is too short</RegistrationValidationErrorMessage>
        case 'maxLength':
            return <RegistrationValidationErrorMessage>The {name} is too long</RegistrationValidationErrorMessage>
        default:
            return null
    }
};

export default RegistrationValidationBody;