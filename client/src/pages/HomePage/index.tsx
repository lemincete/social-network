import { useEffect } from "react";
import Home from "../../modules/Home";

const HomePage = () => {

    useEffect(() => {
        document.title = "Home"
    }, [])

    return <Home />
};

export default HomePage;