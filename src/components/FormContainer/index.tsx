import { memo } from 'react';
import type { FC } from 'react';
import {useTranslation} from "react-i18next";
import FormInput from '../FormInput';

import s from './FormContainer.module.scss';

const FormContainer: FC = () => {
	const {t} = useTranslation()

	return (
		<div className={s.inputs}>
			<FormInput type={'text'} placeholder={t('form.name')}/>
			<FormInput type={'email'} placeholder={t('form.email')}/>
			<FormInput type={'text'} placeholder={t('form.message')}/>
		</div>
	)
};

export default memo(FormContainer);
