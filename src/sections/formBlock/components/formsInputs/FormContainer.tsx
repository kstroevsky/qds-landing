import FormInput from "./FormInput";

import s from "./FormInputs.module.scss";
const FormContainer = () => {
    return (
        <div className={s.inputs}>
            <FormInput type="text" placeholder="Your name"/>
            <FormInput type="email" placeholder="Your email"/>
            <FormInput type="text" placeholder="Your message"/>
        </div>
    );
};

export default FormContainer;