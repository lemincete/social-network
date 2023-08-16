import { useState } from "react";

import Header from "../../components/Header";
import ProfileBody from "./components/ProfileBody";
import ProfileAlertMessage from "./components/ProfileAlertMessage";
import Sidebar from "../../components/Sidebar";

import styles from './index.module.scss';


const Profile = () => {

    const [responseErrorMessage, setResponseErrorMessage] = useState<string>('');

    return (
        <div className={styles.root}>
            <Header />
            <ProfileAlertMessage message={responseErrorMessage} setMessage={setResponseErrorMessage} />
            <div className={styles.root__container}>
                <Sidebar />
                <ProfileBody setErrorMessage={setResponseErrorMessage} />
            </div>
        </div>
    );
};

export default Profile;