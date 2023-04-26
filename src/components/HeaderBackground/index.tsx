import { memo, useContext } from 'react';
import type { FC } from 'react';

import rightImg from '../../assets/bannerBlock/rightSide.png';
import rightImgLight from '../../assets/bannerBlock/rightSideLight.png';
import { Context } from '../../shared/context';
import { EThemes } from '../../shared/constants';

import s from './headerBackground.module.scss';

interface HeaderBackgroundProps {
	activeBurger: boolean;
}

const HeaderBackground: FC<HeaderBackgroundProps> = ({ activeBurger }) => {
	const { theme } = useContext(Context);

	console.log('theme', theme);

	return (
		<div className={s.backgroundContainer}>
			<div className={s.mainBackground}>
				<div className={s.leftBackground}></div>
				{!activeBurger && (
					<img
						className={s.rightImg}
						alt={'theme-toggle'}
						src={theme === EThemes.DARK ? rightImg : rightImgLight}
					/>
				)}
			</div>
		</div>
	);
};

export default memo(HeaderBackground);
