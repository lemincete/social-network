import { FC } from 'react';

import Arrow from '../../images/arrow.svg';
import DefaultAvatar from '../../images/default-avatar.svg';

import styles from './index.module.scss';

import { useAppSelector } from '../../../../hooks/useAppSelector';

interface HeaderAccountBodyProps {
    isOpen: boolean,
    isHover: boolean,
    setIsHover: (hover: boolean) => void,
    setIsOpen: (open: boolean) => void
}

const HeaderAccountBody: FC<HeaderAccountBodyProps> = ({ setIsHover, setIsOpen, isOpen, isHover }) => {

    const { user } = useAppSelector(state => state.user);

    const rootAccountBody = [styles.root];

    isHover && !isOpen && rootAccountBody.push(styles.hover);
    isOpen && rootAccountBody.push(styles.active);

    return (
        <div onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} onClick={() => setIsOpen(!isOpen)} className={rootAccountBody.join(' ')}>
            <div className={styles.root__account_body_avatar}>
                <img src={user?.image || DefaultAvatar} alt="avatar" />
            </div>
            <div className={styles.root__account_body_arrow}>
                <img src={Arrow} alt="arrow" />
            </div>
        </div>
    );
};

export default HeaderAccountBody;