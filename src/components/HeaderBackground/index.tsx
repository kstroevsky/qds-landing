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

	const sources = ['webp', 'png'].map((ext) => ({
		srcset: imageSizes
			.map(
				(size) =>
					`/images/bannerBlock/${
						theme === EThemes.DARK ? 'rightSide' : 'rightSideLight'
					}-${size}.${ext} ${size}w`
			)
			.join(', '),
		ext,
	}));

	return (
		<div className={s.backgroundContainer}>
			<div className={s.mainBackground}>
				<div className={s.leftBackground}></div>
				{!activeBurger && (
					<picture className={s.rightImg}>
						<source srcSet={sources[0].srcset} type={`image/webp`} />
						<img
							className={s.rightImg}
							srcSet={sources[1].srcset}
							alt="Header"
						></img>
					</picture>
				)}
			</div>
		</div>
	);
};

export default memo(HeaderBackground);
