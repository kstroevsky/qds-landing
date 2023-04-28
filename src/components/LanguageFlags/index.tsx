import { memo, useCallback, useState, useEffect } from 'react';
import type { FC } from 'react';

import i18n from '../../shared/i18n';
import { ELanguages } from '../../shared/constants';

import ua from '../../assets/flags/ua.svg';
import en from '../../assets/flags/gb.svg';

import s from './LanguageFlags.module.scss';
import classNames from 'classnames';

const LanguageFlags: FC = () => {
	const [isUA, setIsUA] = useState<boolean>(i18n.language === ELanguages.UA);

	const handleChangeLanguage = useCallback(() => {
		setIsUA((prev) => !prev);
	}, []);

	useEffect(() => {
		i18n.changeLanguage(isUA ? ELanguages.UA : ELanguages.EN);
	}, [isUA]);

	return (
		<div className={s.wrapper} onClick={handleChangeLanguage}>
			<img
				className={classNames(s.flags, i18n.language)}
				// src={''}
				style={{
					backgroundImage: `url(${isUA ? en : ua})`,
				}}
				alt={''}
			/>
			<img
				className={classNames(s.flags, i18n.language)}
				// src={''}
				style={{
					backgroundImage: `url(${isUA ? ua : en})`,
				}}
				alt={''}
			/>
		</div>
	);
};

export default memo(LanguageFlags);
