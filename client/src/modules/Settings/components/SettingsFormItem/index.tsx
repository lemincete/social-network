import { FC, ReactNode } from 'react';

import styles from './index.module.scss';

interface SettingsFormItemProps {
    children: ReactNode
}

const SettingsFormItem: FC<SettingsFormItemProps> = ({ children }) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    );
}

export default SettingsFormItem;