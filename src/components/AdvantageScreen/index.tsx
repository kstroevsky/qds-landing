import ReactDOM from 'react-dom';
import { memo, useEffect, useState } from 'react';
import classnames from 'classnames';
import type { FC } from 'react';

import { EAdvantages } from '../../shared/constants';
import { root } from '../..';

import s from './AdvantageScreen.module.scss';

interface AdvantageScreenProps {
	mode: EAdvantages;
}

const AdvantageScreen: FC<AdvantageScreenProps> = ({ mode }) => {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setIsMounted(true);
		}, 100);
	}, []);

	return ReactDOM.createPortal(
		<div
			className={classnames(s.fullscreenBlock, s[mode || ''], {
				[s.fullscreenBlock__open]: isMounted,
			})}
		>
			<div className={s.fullscreenBlock__content}>
				<h2>{'Fullscreen Block Content'}</h2>
			</div>
		</div>,
		root
	);
};

export default memo(AdvantageScreen);
