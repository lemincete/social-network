import { useEffect } from "react";
import Profile from "../../modules/Profile";

const ProfilePage = () => {

    useEffect(() => {
        document.title = "Profile"
    }, [])

    return <Profile />
};

export default ProfilePage;