import { createContext, useContext } from 'react';

interface ISettingsContext {
    image: string | null | ArrayBuffer,
    setImage: (image: string | null | ArrayBuffer) => void,
    previewImagePath: string | null,
    setPreviewImagePath: (image: string | null) => void
}

export const SettingsContext = createContext<ISettingsContext>({
    image: null,
    setImage: () => { },
    previewImagePath: null,
    setPreviewImagePath: () => { }
})

export const useSettingsContext = () => useContext(SettingsContext);