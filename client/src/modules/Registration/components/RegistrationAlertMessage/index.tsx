import { FC } from 'react';
import { Snackbar, Alert } from '@mui/material';

interface RegistrationAlertMessageProps {
    message: string,
    setMessage: (message: string) => void
}

const RegistrationAlertMessage: FC<RegistrationAlertMessageProps> = ({ message, setMessage }) => {

    return (
        <div>
            <Snackbar open={message.length > 0} >
                <Alert severity="error" onClose={() => setMessage('')}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default RegistrationAlertMessage;