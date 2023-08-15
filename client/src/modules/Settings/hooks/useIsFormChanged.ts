import { useMemo } from 'react';

import { ISettingsForm } from '../types';

import { useFormContext } from 'react-hook-form';

import { useAppSelector } from '../../../hooks/useAppSelector';

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

            if (key === 'defaultGender') {

                if (updatedForm[key] === 'Other') {
                    return updatedForm.gender !== undefined
                }

                return updatedForm[key] !== user['gender']
            }

            if (key !== 'defaultGender' && updatedForm[key] && updatedForm[key] !== user[key]) {
                return true
            }
        }

        return false;
    }, [updatedForm, user, imageBody]);

    return isChanged;
}