import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

interface SettingsValidationErrorMessageProps {
    children: ReactNode
}

const SettingsValidationErrorMessage: FC<SettingsValidationErrorMessageProps> = ({ children }) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};

export default SettingsValidationErrorMessage;