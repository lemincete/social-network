import Header from '../../components/Header';

import { useForm, FormProvider } from 'react-hook-form';

import { ISettingsForm } from './types';

import SettingsBody from './components/SettingsBody';

const Settings = () => {

    const methods = useForm<ISettingsForm>({
        mode: 'onChange'
    });

    return (
        <>
            <Header />
            <FormProvider {...methods}>
                <SettingsBody />
            </FormProvider>
        </>
    );
};

export default Settings;