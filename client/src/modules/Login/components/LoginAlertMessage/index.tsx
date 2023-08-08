import { FC } from 'react';

import { Alert, Snackbar } from '@mui/material'

interface LoginAlertMessageProps {
    message: string,
    setMessage: (message: string) => void
}

const LoginAlertMessage: FC<LoginAlertMessageProps> = ({ message, setMessage }) => {
    return (
        <Snackbar open={message.length > 0}>
            <Alert onClose={() => setMessage('')} severity='error'>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default LoginAlertMessage;