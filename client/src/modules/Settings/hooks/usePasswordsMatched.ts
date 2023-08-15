import { useState, useEffect } from 'react';

export const usePasswordsMatched = (fields: string[]) => {

    const [isMatched, setIsMatched] = useState<boolean>(true);

    useEffect(() => {

        fields[0] && fields[1] ? setIsMatched(fields[0] === fields[1]) : setIsMatched(true);

    }, [fields])

    return isMatched

}