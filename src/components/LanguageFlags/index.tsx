import { memo, useCallback, useState, useEffect } from 'react';
import classNames from 'classnames';
import type { FC } from 'react';

import i18n from '../../shared/i18n';
import { ELanguages } from '../../shared/constants';

import s from './LanguageFlags.module.scss';

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
				style={{
					backgroundImage: `url(/images/flags/${isUA ? 'gb.svg' : 'ua.svg'})`,
				}}
				alt={''}
			/>
			<img
				className={classNames(s.flags, i18n.language)}
				style={{
					backgroundImage: `url(/images/flags/${isUA ? 'ua.svg' : 'gb.svg'})`,
				}}
				alt={''}
			/>
		</div>
	);
};

export default memo(LanguageFlags);
