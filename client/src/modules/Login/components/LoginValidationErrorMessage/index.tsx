import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

interface LoginValidationErrorMessageProps {
    children: ReactNode
}

const LoginValidationErrorMessage: FC<LoginValidationErrorMessageProps> = ({ children }) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};

export default LoginValidationErrorMessage;