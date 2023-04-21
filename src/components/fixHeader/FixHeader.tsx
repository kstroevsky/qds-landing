import {Link} from "react-scroll";

import s from "./FixHeader.module.scss"
import {useIsMobile} from "../../hooks/UseIsMobile";

const FixHeader = ({showHeader}: {showHeader: boolean}) => {
    const navArray = ['ABOUT', 'ADVANTAGES', 'TECHNOLOGIES', 'CONTACTS'];
    const isMobile = useIsMobile();

    return (

        <header className={`${s.fixHeader} ${showHeader && s.fadeIn}`}>
            {!isMobile && <div className={s.titleDiv}>
                <h1>QDS SOFTWARE</h1>
            </div>}
            <nav className={s.fixNav}>
                <ul className={s.fixNav__menu}>
                    {navArray.map((el) => (
                        <li key={el} className={s.fixNav__menu_item}>
                            <Link
                                to={el.toLowerCase()}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                {el}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    );
};

export default FixHeader;