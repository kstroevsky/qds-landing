import loader from "../../assets/loader/loader.svg";

import s from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={loader} alt="Loading"/>
        </div>
    );
};

export default Loader;