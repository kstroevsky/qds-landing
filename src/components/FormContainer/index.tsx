import { memo } from 'react';
import type { FC } from 'react';
import FormInput from '../FormInput';

import s from './FormContainer.module.scss';
import {useTranslation} from "react-i18next";

const FormContainer: FC<any> = (t) => (

	<div className={s.inputs}>
		<FormInput type={'text'} placeholder={'Your name'} />
		<FormInput type={'email'} placeholder={'Your email'} />
		<FormInput type={'text'} placeholder={'Your message'} />
	</div>
);

export default memo(FormContainer);
