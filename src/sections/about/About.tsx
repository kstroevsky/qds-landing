import { forwardRef, memo } from 'react';
import { ENavigationTitles } from '../../shared/constants';
import {useTranslation} from "react-i18next";

import s from './About.module.scss';

const About = forwardRef<HTMLDivElement>((_, ref) => {
	const {t} = useTranslation()

	return (
		<div className={s.wrapper} ref={ref} id={ENavigationTitles.ABOUT}>
			<div className={s.blockTwo}>
				<div>
					<h1 className={s.titleTop}>{t('advantages.who_we_are')}</h1>
					<div className={s.top}></div>
				</div>
			</div>
		</div>
	);
});

export default memo(About);
