import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

interface RegistrationValidationErrorMessageProps {
    children: ReactNode
}

const RegistrationValidationErrorMessage: FC<RegistrationValidationErrorMessageProps> = ({ children }) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};

export default RegistrationValidationErrorMessage;