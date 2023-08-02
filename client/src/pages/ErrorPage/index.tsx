import { useEffect } from "react";
import Error from "../../modules/Error";

const ErrorPage = () => {

    useEffect(() => {
        document.title = "Not Found"
    }, [])

    return <Error />
};

export default ErrorPage;