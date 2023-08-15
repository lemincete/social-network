import { FC } from 'react';

import SettingsValidationErrorMessage from '../SettingsValidationErrorMessage';

import { IFieldsName } from '../../types';

interface SettingsValidationBodyProps {
    type?: string,
    name: IFieldsName
}

const SettingsValidationBody: FC<SettingsValidationBodyProps> = ({ type, name }) => {
    switch (type) {
        case 'pattern':
            return <SettingsValidationErrorMessage>Incorrect {name} </SettingsValidationErrorMessage>
        case 'minLength':
            return <SettingsValidationErrorMessage>The {name} is too short</SettingsValidationErrorMessage>
        case 'maxLength':
            return <SettingsValidationErrorMessage>The {name} is too long</SettingsValidationErrorMessage>
        default:
            return null
    }
};

export default SettingsValidationBody;