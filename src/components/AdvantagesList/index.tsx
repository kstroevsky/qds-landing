import { Suspense, lazy, memo, useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { EAdvantages } from '../../shared/constants';
import { root } from '../..';

import s from './AdvantagesList.module.scss';

const AdvantageScreen = lazy(() => import('../AdvantageScreen'));

const AdvantagesList: FC = () => {
	const [fullscreenOpen, setFullscreenOpen] = useState<EAdvantages | null>(
		null
	);

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
				onClick={() => handleSectionClick(EAdvantages.FIRST)}
			>
				<div className={s.section__right}></div>
			</div>
			<div
				key={`advantage-${EAdvantages.SECOND}`}
				className={classnames(s.section, s.section_second)}
				onClick={() => handleSectionClick(EAdvantages.SECOND)}
			>
				<div className={s.section__left}></div>
			</div>
			<div
				key={`advantage-${EAdvantages.THIRD}`}
				className={classnames(s.section, s.section_third)}
				onClick={() => handleSectionClick(EAdvantages.THIRD)}
			>
				<div className={s.section__right}></div>
			</div>
		</>
	);
};

export default memo(AdvantagesList);
