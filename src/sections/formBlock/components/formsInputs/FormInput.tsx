import s from "./FormInputs.module.scss";

interface FormInputProps {
    type: string;
    placeholder: string
}
const FormInput = ({type, placeholder}: FormInputProps) => {

    return (
        <input className={s.inputs__item} type={type} placeholder={placeholder}/>
    );
};

export default FormInput;