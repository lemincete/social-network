import { FormProvider, useForm } from "react-hook-form";

import { ILoginForm } from "./types";

import LoginBody from "./components/LoginBody";

const Login = () => {

    const methods = useForm<ILoginForm>();

    return (
        <FormProvider {...methods}>
            <LoginBody />
        </FormProvider>
    );
};

export default Login;