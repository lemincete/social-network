import Flower from './images/flower.svg';
import styles from './index.module.scss';


const Error = () => {
    return (
        <div className={styles.root}>
            <div className={styles.root__image}>
                <img src={Flower} alt="flower" />
            </div>
        </div>
    );
};

export default Error;