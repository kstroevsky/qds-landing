import { memo } from 'react';
import type { FC } from 'react';

import s from './FormInputs.module.scss';

interface FormInputProps {
	type: string;
	placeholder: string;
}
const FormInput: FC<FormInputProps> = ({ type, placeholder }) => (
	<input className={s.item} type={type} placeholder={placeholder} />
);

export default memo(FormInput);
