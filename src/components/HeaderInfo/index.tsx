import { memo } from 'react';
import type { FC } from 'react';
import {useTranslation} from "react-i18next";

import { ENavigationTitles } from '../../shared/constants';

import s from './headerInfo.module.scss';

const HeaderInfo: FC = () => {
	const {t} = useTranslation()

	return (
		<div className={s.info}>
			<h1 className={s.title}>{'QDS SOFTWARE'}</h1>
			<button className={s.button}>
				<a href={`#${ENavigationTitles.CONTACTS}`}>{t('contact_us')}</a>
			</button>
		</div>
	)
};

export default memo(HeaderInfo);
