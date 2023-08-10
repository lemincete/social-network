import { useEffect } from "react";

import { fetchProfile } from "./api/fetchProfile";

import Header from "../../components/Header";

import styles from './index.module.scss';

const Profile = () => {

    useEffect(() => {
        fetchProfile();
    }, [])

    return (
        <div className={styles.root}>
            <Header />
        </div>
    );
};

export default Profile;