import { FC } from 'react';
import { Snackbar, Alert } from '@mui/material';

interface ProfileAlertMessageProps {
    message: string,
    setMessage: (message: string) => void
}

const ProfileAlertMessage: FC<ProfileAlertMessageProps> = ({ message, setMessage }) => {

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

export default ProfileAlertMessage;