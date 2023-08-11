import { useState, useMemo } from 'react';

import { ISettingsForm } from '../types';

import { useAppSelector } from '../../../hooks/useAppSelector';

export const useIsFormChanged = (updatedForm: ISettingsForm, image: string | null | ArrayBuffer): boolean => {

    const { user } = useAppSelector(state => state.user);

    const isChanged = useMemo(() => {
        if (!user) {
            return false;
        }

        if (image) {
            return true
        }

        for (let key in updatedForm) {
            if (key === 'newPassword' || key === 'confirmPassword') {
                if (updatedForm[key] && updatedForm[key].length > 0) {
                    return true;
                }
            } else if (updatedForm[key] && updatedForm[key] !== user[key]) {
                return true;
            }
        }

        return false;
    }, [updatedForm]);

    return isChanged;
}