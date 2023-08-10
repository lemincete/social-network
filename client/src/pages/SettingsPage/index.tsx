import { useEffect } from 'react';

import Settings from "../../modules/Settings";

const SettingsPage = () => {

    useEffect(() => {
        document.title = 'Settings'
    }, [])

    return <Settings />
}

export default SettingsPage;