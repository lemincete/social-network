import { FC } from 'react';

import { Alert, Snackbar } from "@mui/material";

interface SettingsAlertMessageProps {
    message: string,
    setMessage: (message: string) => void
}

const SettingsAlertMessage: FC<SettingsAlertMessageProps> = ({ message, setMessage }) => {
    return (
        <div>
            <Snackbar open={message.length > 0} >
                <Alert severity="error" onClose={() => setMessage('')}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default SettingsAlertMessage;