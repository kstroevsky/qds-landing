import s from "./FormButton.module.scss";
import {useTranslation} from "react-i18next";

const FormButton = () => {
    const {t} = useTranslation();

    return (
        <button className={s.button}>
            {t('form.send')}
        </button>
    );
};

export default FormButton;