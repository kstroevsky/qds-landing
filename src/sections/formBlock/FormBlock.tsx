import topForm from "../../assets/formBlock/topForm.png";
import downForm from "../../assets/formBlock/downForm.png";

import s from "./FormBlock.module.scss"


const FormBlock = () => {

    return (
        <div className={s.wrapper}>
            <div className={s.background}>
                <h1 className={s.title}>CONTACT US</h1>
                <div className={s.formWrapper}>
                    <form className={s.form} action="">
                        <span className={s.span}>I'm interested in...</span>
                        <div className={s.userChoice}>
                            <div className={s.userChoice__top}>
                                <button className={s.userChoice__top_item}>UI/UX design</button>
                                <button className={s.userChoice__top_item}>Frontend</button>
                                <button className={s.userChoice__top_item}>Graphic design</button>
                            </div>
                            <div className={s.userChoice__bottom}>
                                <button className={s.userChoice__bottom_item}>Devops</button>
                                <button className={s.userChoice__bottom_item}>Architecture</button>
                            </div>
                        </div>
                        <div className={s.inputs}>
                            <input className={s.inputs__item} type="text" placeholder="Your name"/>
                            <input className={s.inputs__item} type="email" placeholder="Your email"/>
                            <input className={s.inputs__item} type="text" placeholder="Your message"/>
                        </div>
                    </form>
                    <img src={topForm} alt="line"/>
                    <img src={downForm} alt="line"/>
                    <div className={s.downBlock}>
                        <a className={s.downBlock__link} href="">SaulDesign@gmail.com</a>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default FormBlock;