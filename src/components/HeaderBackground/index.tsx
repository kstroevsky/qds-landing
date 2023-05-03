import { memo, useContext } from 'react';
import type { FC } from 'react';

import { Context } from '../../shared/context';
import { EThemes, imageSizes } from '../../shared/constants';

import s from './headerBackground.module.scss';

interface HeaderBackgroundProps {
	activeBurger: boolean;
}

const HeaderBackground: FC<HeaderBackgroundProps> = ({ activeBurger }) => {
	const { theme } = useContext(Context);

	const bg = `/images/bannerBlock/${
		theme === EThemes.DARK ? 'rightSide.png' : 'rightSideLight.png'
	}`;

	const srcset = imageSizes
		.map((size) => {
			return `/images/bannerBlock/${
				theme === EThemes.DARK ? 'rightSide' : 'rightSideLight'
			}-${size}.png ${size}w, /images/bannerBlock/${
				theme === EThemes.DARK ? 'rightSide' : 'rightSideLight'
			}-${size}.webp ${size}w`;
		})
		.join(', ');

	return (
		<div className={s.backgroundContainer}>
			<div className={s.mainBackground}>
				<div className={s.leftBackground}></div>
				{!activeBurger && (
					<img className={s.rightImg} alt={'theme-toggle'} srcSet={srcset} />
				)}
			</div>
		</div>
	);
};

export default memo(HeaderBackground);
