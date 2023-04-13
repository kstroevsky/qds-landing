import graphQl from "../../assets/slides/graphQL.svg";
import mobx from "../../assets/slides/mobx.svg";
import mongo from "../../assets/slides/mongodb.svg";
import nestJS from "../../assets/slides/NestJS 1.svg";
import nodeJS from "../../assets/slides/node.js.svg";
import postgre from "../../assets/slides/postgreSQL.svg";
import react from "../../assets/slides/react.svg";
import recoil from "../../assets/slides/recoil-js.svg";
import redux from "../../assets/slides/redux.svg";
import reduxsaga from "../../assets/slides/redux-saga.svg";
import three from "../../assets/slides/three.js.svg";
import vue from "../../assets/slides/vue.svg";
import webpack from "../../assets/slides/webpack.svg";

import s from "./Block4.module.scss";

const Block4 = () => {
    const imgArr = [graphQl, mobx, mongo, nestJS, nodeJS, postgre, react, recoil, redux, reduxsaga, three, vue, webpack];
    const imgArrExtended = [...imgArr, ...imgArr, ...imgArr];

    return (
        <div className={s.block}>
            <h1 className={s.title}>TECHNOLOGY</h1>
            <div className={s.table}>
                <div className={s.sliderTrack}>
                    {imgArrExtended.map((img, idx) => (
                        <div className={s.slide} key={idx}>
                            <img className={s.slide__icon} src={img} alt={img} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Block4;