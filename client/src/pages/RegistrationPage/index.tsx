import { useEffect } from "react";
import Registration from "../../modules/Registration";

const RegistrationPage = () => {

    useEffect(() => {
        document.title = "Registration"
    }, [])

    return <Registration />
};

export default RegistrationPage;