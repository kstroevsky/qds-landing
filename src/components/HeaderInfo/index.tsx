import { memo } from 'react';
import type { FC } from 'react';

import { ENavigationTitles } from '../../shared/constants';

import s from './headerInfo.module.scss';

const HeaderInfo: FC = () => (
	<div className={s.info}>
		<h1 className={s.title}>{'QDS SOFTWARE'}</h1>
		<button className={s.button}>
			<a href={`#${ENavigationTitles.CONTACTS}`}>{'CONTACT US'}</a>
		</button>
	</div>
);

export default memo(HeaderInfo);
