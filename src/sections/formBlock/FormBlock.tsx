import UserChoice from './components/userChoice/UserChoice';
import FormContainer from './components/formsInputs/FormContainer';

import topForm from '../../assets/formBlock/topForm.png';
import downForm from '../../assets/formBlock/downForm.png';

import s from './FormBlock.module.scss';

const FormBlock = () => {
	return (
		<div className={s.wrapper}>
			<h1 className={s.title}>CONTACT US</h1>
			<div className={s.formWrapper}>
				<form className={s.form} action="">
					<span className={s.span}>I'm interested in...</span>
					<UserChoice />
					<FormContainer />
				</form>
				<img src={topForm} alt="line" />
				<img src={downForm} alt="line" />
				<div className={s.downBlock}>
					<a className={s.downBlock__link} href="#">
						example@gmail.com
					</a>
				</div>
			</div>
			<div className={s.background}></div>
		</div>
	);
};

export default FormBlock;
