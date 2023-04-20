import {useTheme} from "../../hooks/UseTheme";

import line from "../../assets/thema/line.svg";

import s from "./ThemesToggle.module.scss"


const ThemesToggle = () => {
    const {setTheme} = useTheme();

    return (
        <div className={s.theme}>
            <div className={s.dark} onClick={() => setTheme('dark')}></div>
            <img className={s.line} src={line} alt={line}/>
            <div className={s.light} onClick={() => setTheme('light')}></div>
        </div>
    );
};

export default ThemesToggle;