import { FC } from 'react';
import Test from '../../images/test.jpg';
import Arrow from '../../images/arrow.svg';
import styles from './index.module.scss';

interface HeaderAccountBodyProps {
    isOpen: boolean,
    isHover: boolean,
    setIsHover: (hover: boolean) => void,
    setIsOpen: (open: boolean) => void
}

const HeaderAccountBody: FC<HeaderAccountBodyProps> = ({ setIsHover, setIsOpen, isOpen, isHover }) => {

    const rootAccountBody = [styles.root];

    isHover && !isOpen && rootAccountBody.push(styles.hover);
    isOpen && rootAccountBody.push(styles.active);

    return (
        <div onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} onClick={() => setIsOpen(!isOpen)} className={rootAccountBody.join(' ')}>
            <div className={styles.root__account_body_avatar}>
                <img src={Test} alt="avatar" />
            </div>
            <div className={styles.root__account_body_arrow}>
                <img src={Arrow} alt="arrow" />
            </div>
        </div>
    );
};

export default HeaderAccountBody;