import { FC } from 'react';

import RegistrationValidationErrorMessage from '../RegistrationValidationErrorMessage';

interface RegistrationValidationPasswordsBodyProps {
    type?: string
}

const RegistrationValidationPasswordsBody: FC<RegistrationValidationPasswordsBodyProps> = ({ type }) => {
    switch (type) {
        case 'minLength':
            return <RegistrationValidationErrorMessage>Password is too short</RegistrationValidationErrorMessage>
        case 'maxLength':
            return <RegistrationValidationErrorMessage>Password is too long</RegistrationValidationErrorMessage>
        default:
            return null
    }
};

export default RegistrationValidationPasswordsBody;