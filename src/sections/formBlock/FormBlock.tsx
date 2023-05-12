import { forwardRef, memo } from 'react';
import FormContainer from '../../components/FormContainer';

import UserChoice from '../../components/UserChoice';
import { ENavigationTitles } from '../../shared/constants';
import FormButton from '../../components/FormButton/FormButton';
import { useTranslation } from 'react-i18next';
import useIsMobile from '../../hooks/useIsMobile';

import s from './FormBlock.module.scss';

const FormBlock = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslation();
	const isMobile = useIsMobile();
	const path = '/images/formBlock/';

	return (
		<div className={s.wrapper} id={ENavigationTitles.CONTACTS} ref={ref}>
			{!isMobile && (
				<img className={s.bgImg} src={'/images/formBlock/bgForm.png'} alt="" />
			)}
			<h1 className={s.title}>{t('navigate.contacts')}</h1>
			<div className={s.formWrapper}>
				<div className={`${s.__container_top}`}>
					<form className={s.form} action="">
						<span className={s.span}>{t('form.title')}</span>
						<UserChoice />
						<FormContainer />
					</form>
					<img
						src={`${path}topForm.svg`}
						alt="line"
						className={`${s.__img}`}
					/>
				</div>
				<div className={`${s.__container_bottom}`}>
					<img
						src={`${path}downForm.svg`}
						alt="line"
						className={`${s.__img}`}
					/>
					<div className={s.downBlock}>
						<FormButton />
						<a className={s.downBlock__link} href="#">
							{'example@gmail.com'}
						</a>
					</div>
				</div>
			</div>
			<div className={s.background}></div>
		</div>
	);
});

export default memo(FormBlock);
