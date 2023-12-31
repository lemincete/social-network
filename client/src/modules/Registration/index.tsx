import RegistrationBody from "./components/RegistrationBody";
import { FormProvider, useForm } from 'react-hook-form';

import { IRegistrationForm } from "./types";


const Registration = () => {

    const methods = useForm<IRegistrationForm>({
        mode: 'onChange'
    });

    return (
        <FormProvider {...methods}>
            <RegistrationBody />
        </FormProvider>
    )

};

export default Registration;