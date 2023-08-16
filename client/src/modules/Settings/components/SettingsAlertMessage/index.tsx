import { Alert, Snackbar } from "@mui/material";

import { useSettingsContext } from "../../context/SettingsContext";

const SettingsAlertMessage = () => {

    const { message, setMessage } = useSettingsContext();

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