import { useState, memo, useCallback } from 'react';
import type { FC } from 'react';

import i18next from 'i18next';
import { ELanguages } from '../../shared/constants';

import ua from "../../assets/flags/ukraine.png";
import en from "../../assets/flags/england.png";

import s from './LanguageFlags.module.scss';

const LanguageFlags: FC = () => {
	const [isUA, setIsUA] = useState<boolean>(true);
	const [activeFlag, setActiveFlag] = useState(i18next.language)

	console.log(activeFlag)

	const handleChangeLanguage = useCallback((lang: ELanguages) => {
		setIsUA((prev) => !prev);
		i18next.changeLanguage(lang);
		setActiveFlag(i18next.language)
	}, []);

	return (
		<div className={s.wrapper} onClick={() => {handleChangeLanguage(isUA ? ELanguages.UA : ELanguages.EN);}}>
			<img className={s.flags} src={activeFlag === 'ua' ? en : ua} alt={'ua'} />
			<img className={s.flags} src={activeFlag !== 'en' ? ua : en} alt={'en'} />
		</div>
	);
};

export default memo(LanguageFlags);
