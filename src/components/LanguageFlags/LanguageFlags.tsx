import { useState, memo, useCallback } from 'react';
import type { FC } from 'react';

import i18next from 'i18next';
import { ELanguages } from '../../shared/constants';

import s from './LanguageFlags.module.scss';

const LanguageFlags: FC = () => {
	const [isUA, setIsUA] = useState<boolean>(true);

	const handleChangeLanguage = useCallback((lang: ELanguages) => {
		setIsUA((prev) => !prev);
		i18next.changeLanguage(lang);
	}, []);

	return (
		<div className={s.wrapper}>
			<h1
				onClick={() => {
					handleChangeLanguage(isUA ? ELanguages.UA : ELanguages.EN);
				}}
			>
				{isUA ? ELanguages.UA : ELanguages.EN}
			</h1>
		</div>
	);
};

export default memo(LanguageFlags);
