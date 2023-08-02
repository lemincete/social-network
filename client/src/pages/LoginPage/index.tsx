import { useEffect } from "react";
import Login from "../../modules/Login";
import { Navigate } from "react-router-dom";

const LoginPage = () => {

    useEffect(() => {
        document.title = "Login"
    }, [])

    return <Login />
};

export const NavigateToLogin = () => {
    return <Navigate to="/login" />
}

export default LoginPage;