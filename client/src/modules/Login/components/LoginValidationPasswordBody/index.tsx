import { FC } from 'react';

import LoginValidationErrorMessage from '../LoginValidationErrorMessage';

interface LoginValidationPasswordBodyProps {
    type?: string
}

const LoginValidationPasswordBody: FC<LoginValidationPasswordBodyProps> = ({ type }) => {
    switch (type) {
        case 'minLength':
            return <LoginValidationErrorMessage>Password is too short</LoginValidationErrorMessage>
        case 'maxLength':
            return <LoginValidationErrorMessage>Password is too long</LoginValidationErrorMessage>
        default:
            return null
    }
};

export default LoginValidationPasswordBody;