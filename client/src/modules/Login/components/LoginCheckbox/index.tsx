import styles from './index.module.scss';

import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { guestChangeAction } from '../../../../store/reducers/guestReducer';
import { useAppSelector } from '../../../../hooks/useAppSelector';

import { Checkbox } from '@mui/material';

const LoginCheckbox = () => {

    const dispatch = useAppDispatch();
    const { isGuest } = useAppSelector(state => state.guest);

    return (
        <div className={styles.root}>
            <Checkbox id="#guestCheckbox" color="default" checked={isGuest} onChange={() => dispatch(guestChangeAction(!isGuest))} className={styles.root__checkbox} />
            <label htmlFor='#guestCheckbox' className={styles.root__label__checkbox}>Save login</label>
        </div>
    );
};

export default LoginCheckbox;