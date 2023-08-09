import { useEffect } from "react";

import { fetchProfile } from "./api/fetchProfile";

const Profile = () => {

    useEffect(() => {
        fetchProfile();
    }, [])

    return (
        <div>
            profile
        </div>
    );
};

export default Profile;