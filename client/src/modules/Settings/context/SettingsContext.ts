import { createContext, useContext } from 'react';

interface ISettingsContext {
    activeOption: string,
    setActiveOption: (option: string) => void,
    gender: string,
    setGender: (gender: string) => void,
    message: string,
    setMessage: (message: string) => void
}

export const SettingsContext = createContext<ISettingsContext>({
    activeOption: '',
    setActiveOption: () => { },
    gender: '',
    setGender: () => { },
    message: '',
    setMessage: () => { }
})

export const useSettingsContext = () => useContext(SettingsContext);