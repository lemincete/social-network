import { useMemo } from 'react';

import { ISettingsForm } from '../types';

import { useFormContext } from 'react-hook-form';

import { useAppSelector } from '../../../hooks/useAppSelector';

const canBeUndefinedItems = ['bio'];

export const useIsFormChanged = (defaultGender: string): boolean => {

    const { user } = useAppSelector(state => state.user);
    const { imageBody } = useAppSelector(state => state.avatar);

    const { watch } = useFormContext<ISettingsForm>();

    const updatedForm: { [key: string]: string } = {
        name: watch('name'),
        surname: watch('surname'),
        email: watch('email'),
        password: watch('password'),
        confirmPassword: watch('confirmPassword'),
        gender: watch('otherGender'),
        bio: watch('bio'),
        defaultGender
    }

    const isChanged = useMemo(() => {
        if (!user) {
            return false;
        }

        if (imageBody.image || imageBody.image === null) {
            return true
        }

        for (let key in updatedForm) {
            if (key === 'defaultGender' && updatedForm[key] !== 'Other') {
                return updatedForm[key] !== user['gender']
            }

            if (key !== 'defaultGender' && updatedForm[key] && updatedForm[key] !== user[key]) {
                return true
            }

            if (canBeUndefinedItems.includes(key) && updatedForm[key] !== undefined) {
                return updatedForm[key] !== user[key]
            }
        }

        return false;
    }, [updatedForm, user, imageBody]);

    return isChanged;
}