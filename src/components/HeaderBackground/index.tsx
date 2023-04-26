import { memo } from 'react';
import type { FC } from 'react';

import rightImg from "../../assets/bannerBlock/rightSide.png"

import s from './headerBackground.module.scss';

interface HeaderBackgroundProps {
	activeBurger: boolean;
}

const HeaderBackground: FC<HeaderBackgroundProps> = ({ activeBurger }) => (
	<div className={s.backgroundContainer}>
		<div className={s.mainBackground}>
			<div className={s.leftBackground}></div>
			{/*{!activeBurger && <div className={s.rightBackground}></div>}*/}
			{!activeBurger && <img className={s.rightImg} src={rightImg}/>}
		</div>
	</div>
);

export default memo(HeaderBackground);
