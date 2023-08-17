import { useFormContext } from "react-hook-form";

import { ISettingsForm } from "../../types";

import SettingsPasswordInput from "../SettingsPasswordInput";

import styles from './index.module.scss';

import { usePasswordsMatched } from "../../hooks/usePasswordsMatched";

const SettingsPasswordsBody = () => {

    const { watch } = useFormContext<ISettingsForm>();

    const passwordsFields = watch(['password', 'confirmPassword']);

    const passwordMatched = usePasswordsMatched(passwordsFields);

    return (
        <div className={styles.root__form__item__block}>
            <SettingsPasswordInput required={passwordsFields[1]?.length > 0} name="password" isMatched={passwordMatched} />
            <SettingsPasswordInput required={passwordsFields[0]?.length > 0} name="confirmPassword" isMatched={passwordMatched} />
        </div>
    );
}

export default SettingsPasswordsBody;