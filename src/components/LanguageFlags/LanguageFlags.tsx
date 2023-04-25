import {useState} from "react";

import i18next from 'i18next';

import s from "./LanguageFlags.module.scss";


const LanguageFlags = () => {
    const [isUa, setIsUa] = useState(true);

    const handleChangeLanguage = (lang: string) => {
        setIsUa(!isUa);
        i18next.changeLanguage(lang);
    }

    return (
        <div className={s.wrapper}>
            <h1 onClick={() => {handleChangeLanguage(isUa ? 'ua' : 'en')}}>
                {isUa ? 'UA' : 'EN'}
            </h1>
        </div>
    );
};

export default LanguageFlags;