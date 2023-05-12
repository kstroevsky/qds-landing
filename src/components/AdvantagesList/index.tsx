import { Suspense, lazy, memo, useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';
import type { FC } from 'react';

import { EAdvantages } from '../../shared/constants';
import { root } from '../..';
import { useTranslation } from 'react-i18next';

import s from './AdvantagesList.module.scss';

const AdvantageScreen = lazy(() => import('../AdvantageScreen'));

const AdvantagesList: FC = () => {
	const [fullscreenOpen, setFullscreenOpen] = useState<EAdvantages | null>(null);

	const { t } = useTranslation();

	const handleSectionClick = useCallback((adv: EAdvantages) => {
		setFullscreenOpen(adv);
	}, []);

	const handleClick = useCallback((e: MouseEvent) => {
		e.pageX < window.innerWidth * 0.3 && setFullscreenOpen(null);
	}, []);

	useEffect(() => {
		if (fullscreenOpen) {
			document.body.style.overflowY = 'hidden';
			root.style.right = '100vw';
		} else {
			document.body.style.overflowY = 'auto';
			document.body.style.overflowX = 'hidden';
			root.style.right = '0';
		}
	}, [fullscreenOpen]);

	useEffect(() => {
		document.body.addEventListener('mousedown', handleClick);

		if (fullscreenOpen) {
			return () => {
				document.body.removeEventListener('mousedown', handleClick);
			};
		}
	}, [fullscreenOpen, handleClick]);

	return (
		<>
			<Suspense>
				{!!fullscreenOpen && <AdvantageScreen mode={fullscreenOpen} />}
			</Suspense>
			<div
				key={`advantage-${EAdvantages.FIRST}`}
				className={classnames(s.section, s.section_first)}
			>
				<div className={s.section__right}></div>
				<button
					className={`${s.button} ${s.button__left}`}
					onClick={() => handleSectionClick(EAdvantages.FIRST)}
				>
					{t('advantages.learn_more')}
				</button>
				{/*<picture className={s.adv__img}>*/}
				{/*	<source srcSet={'/images/block3/first.png'} type={`image/webp`} />*/}
				{/*	<img*/}
				{/*		className={s.adv__img}*/}
				{/*		srcSet={'/images/block3/first.png'}*/}
				{/*		alt="Header"*/}
				{/*	></img>*/}
				{/*</picture>*/}
				<img
					className={`${s.adv__img} ${s.adv__img_right}`}
					src={'/images/block3/first.png'}
					alt=""
				/>
			</div>
			<div
				key={`advantage-${EAdvantages.SECOND}`}
				className={classnames(s.section, s.section_second)}
			>
				<div className={s.section__left}></div>
				<button
					className={`${s.button} ${s.button__right}`}
					onClick={() => handleSectionClick(EAdvantages.SECOND)}
				>
					{t('advantages.learn_more')}
				</button>
				{/*<picture className={s.adv__img}>*/}
				{/*	<source srcSet={`/images/block3/second.png`} type={`image/webp`} />*/}
				{/*	<img*/}
				{/*		className={s.adv__img}*/}
				{/*		srcSet={`/images/block3/second.png`}*/}
				{/*		alt="Header"*/}
				{/*	></img>*/}
				{/*</picture>*/}
				<img
					className={`${s.adv__img} ${s.adv__img_left}`}
					src={`/images/block3/second.png`}
					alt=""
				/>
			</div>
			<div
				key={`advantage-${EAdvantages.THIRD}`}
				className={classnames(s.section, s.section_third)}
			>
				<div className={s.section__right}></div>
				<button
					className={`${s.button} ${s.button__left}`}
					onClick={() => handleSectionClick(EAdvantages.THIRD)}
				>
					{t('advantages.learn_more')}
				</button>
				{/*<picture className={s.adv__img}>*/}
				{/*	<source srcSet={'/images/block3/third.png'} type={`image/webp`} />*/}
				{/*	<img*/}
				{/*		className={s.adv__img}*/}
				{/*		srcSet={'/images/block3/third.png'}*/}
				{/*		alt="Header"*/}
				{/*	></img>*/}
				{/*</picture>*/}
				<img
					className={`${s.adv__img} ${s.adv__img_right}`}
					src={'/images/block3/third.png'}
					alt=""
				/>
			</div>
		</>
	);
};

export default memo(AdvantagesList);
