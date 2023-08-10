import { useState } from 'react';

export const useFetching = (callback: (args?: any) => void): [(args?: any) => void, boolean] => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetching = async (args?: any) => {
        try {
            setIsLoading(true);
            await callback(args);
        } catch (e) {

        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading]
}