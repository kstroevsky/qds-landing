import { forwardRef, memo } from 'react';
import FormContainer from '../../components/FormContainer';
import topForm from '../../assets/formBlock/topForm.svg';
import downForm from '../../assets/formBlock/downForm.svg';
import UserChoice from '../../components/UserChoice';
import { ENavigationTitles } from '../../shared/constants';

import s from './FormBlock.module.scss';
import FormButton from "../../components/FormButton/FormButton";

const FormBlock = forwardRef<HTMLDivElement, any>(({t}, ref) => (

	<div className={s.wrapper} id={ENavigationTitles.CONTACTS} ref={ref}>
		<h1 className={s.title}>{t('navigate.contacts')}</h1>
		<div className={s.formWrapper}>
			<div className={`${s.__container_top}`}>
				<form className={s.form} action="">
					<span className={s.span}>{t('form.title')}</span>
					<UserChoice />
					<FormContainer t={t}/>
				</form>
				<img src={topForm} alt="line" className={`${s.__img}`} />
			</div>
			<div className={`${s.__container_bottom}`}>
				<img src={downForm} alt="line" className={`${s.__img}`} />
				<div className={s.downBlock}>
					<FormButton/>
					<a className={s.downBlock__link} href="#">
						{'example@gmail.com'}
					</a>
				</div>
			</div>
		</div>
		<div className={s.background}></div>
	</div>
));

export default memo(FormBlock);
