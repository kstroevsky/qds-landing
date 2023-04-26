import {memo, useContext, useEffect, useState} from 'react';
import type { FC } from 'react';

import rightImg from "../../assets/bannerBlock/rightSide.png";
import rightImgLight from "../../assets/bannerBlock/rightSideLight.png"

import s from './headerBackground.module.scss';
import {Context} from "../../context";

interface HeaderBackgroundProps {
	activeBurger: boolean;
}

const HeaderBackground: FC<HeaderBackgroundProps> = ({ activeBurger}) => {
	const {theme} = useContext(Context);

	console.log("theme", theme)

	return (
		<div className={s.backgroundContainer}>
			<div className={s.mainBackground}>
				<div className={s.leftBackground}></div>
				{/*{!activeBurger && <div className={s.rightBackground}></div>}*/}
				{!activeBurger && <img className={s.rightImg} src={theme === 'dark' ? rightImg : rightImgLight}/>}
			</div>
		</div>
	)
};

export default memo(HeaderBackground);
