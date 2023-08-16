import { useEffect } from "react";

import { useAppSelector } from "../../hooks/useAppSelector";

import Profile from "../../modules/Profile";

const ProfilePage = () => {

    const { user } = useAppSelector(state => state.user);

    useEffect(() => {
        document.title = user ? `${user.name} ${user.surname}` : ''
    }, [])

    return <Profile />
};

export default ProfilePage;