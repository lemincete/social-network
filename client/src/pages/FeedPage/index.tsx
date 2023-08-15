import { useEffect } from "react";

import { Navigate } from "react-router-dom";

import Feed from "../../modules/Feed";


const FeedPage = () => {

    useEffect(() => {
        document.title = 'Feed'
    }, [])

    return <Feed />
}

export const NavigateToFeed = () => {
    return <Navigate to="/feed" />
}

export default FeedPage;