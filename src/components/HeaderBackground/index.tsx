import { memo } from 'react';
import type { FC } from 'react';
import s from './headerBackground.module.scss';

interface HeaderBackgroundProps {
	activeBurger: boolean;
}

const HeaderBackground: FC<HeaderBackgroundProps> = ({ activeBurger }) => (
	<div className={s.backgroundContainer}>
		<div className={s.mainBackground}>
			<div className={s.leftBackground}></div>
			{!activeBurger && <div className={s.rightBackground}></div>}
		</div>
	</div>
);

export default memo(HeaderBackground);
