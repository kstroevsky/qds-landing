import { memo, useContext, useEffect, useMemo } from 'react';
import type { FC } from 'react';

import { Context } from '../../shared/context';
import { EThemes, imageSizes } from '../../shared/constants';

import s from './headerBackground.module.scss';

interface HeaderBackgroundProps
{
	activeBurger: boolean;
}

const findNearest = (num: number[], currentBorder: number) =>
{
	const numbers = [ ...num ];

	while (
		numbers[ 0 ] > currentBorder
	) {
		numbers.splice(0, 1);
	}

	return numbers;
};

const HeaderBackground: FC<HeaderBackgroundProps> = ({ activeBurger }) =>
{
	const { theme } = useContext(Context);

	const sizes = [
		'(min-width: 850px) and (max-width: 1024px) 100vw',
		'(min-width: 700px) and (max-width: 850px) 76vw',
		'(min-width: 480px) and (max-width: 700px) 100vw',
		'(max-width: 479px) 60vw',
		'83vw',
	];

	const sources = useMemo(() => [ 'webp', 'png' ].map((ext) => ({
		// get max-width and size
		srcset: sizes.slice(0, -2).map((x: string) =>
			x.match(/max-width:\s*(\d+)px.*?(\d+)vw/)?.slice(1, 3)
			// get all needable image sizes based on media-query sizes
		).map((x) => Number(x?.[ 0 ]) * (Number(x?.[ 1 ]) / 100)).map((x) => [ findNearest(imageSizes, x)[ 0 ], x ])
			.map(
				([ imageWidth, viewWidth ]) =>
					`/images/bannerBlock/${theme === EThemes.DARK ? 'rightSide' : 'rightSideLight'
					}-${imageWidth}.${ext} ${viewWidth ? viewWidth + 'w' : ''}`
			).join(', '),
	})), [ theme ]);

	console.log(sources[ 1 ].srcset)

	return (
		<div className={s.backgroundContainer}>
			<div className={s.mainBackground}>
				<div className={s.leftBackground}></div>
				{!activeBurger && (
					<picture className={s.rightImg}>
						<source src={`/images/bannerBlock/${theme === EThemes.DARK ? 'rightSide' : 'rightSideLight'
							}-${imageSizes[ 0 ]}.webp`} srcSet={sources[ 0 ].srcset} type={`image/webp`} />
						<img src={`/images/bannerBlock/${theme === EThemes.DARK ? 'rightSide' : 'rightSideLight'
							}-${imageSizes[ 0 ]}.png`}
							srcSet={sources[ 1 ].srcset}
							width={1000}
							alt="Header"
						/>
					</picture>
				)}
			</div>
		</div>
	);
};

export default memo(HeaderBackground);
