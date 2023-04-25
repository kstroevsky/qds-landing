import { forwardRef, memo, useCallback, useEffect, useState } from 'react';

import HeaderBackground from '../../components/HeaderBackground';
import HeaderNav from '../../components/HeaderNav';
import HeaderInfo from '../../components/HeaderInfo';
import ThemesToggle from '../../components/theme/ThemesToggle';
import useIsMobile from '../../hooks/useIsMobile';

import s from './header.module.scss';
import {useTranslation} from "react-i18next";

const Header = forwardRef<HTMLDivElement>((_, ref) => {
	const isMobile = useIsMobile();
	const [activeBurger, setActiveBurger] = useState<boolean>(false);
	const {t} = useTranslation()

	const handleBurgerClick = useCallback(() => {
		setActiveBurger((prev) => !prev);
	}, []);

	useEffect(() => {
		if (!isMobile) {
			setActiveBurger(false);
		}
	}, [isMobile]);

	useEffect(() => {
		document.body.style.overflowY = activeBurger ? 'hidden' : 'auto';
	}, [activeBurger]);

	console.log(t)

	return (
		<div className={s.bannerWrapper} ref={ref}>
			<HeaderNav
				activeBurger={activeBurger}
				onBurgerClick={handleBurgerClick}
				t={t}
			/>
			{!activeBurger && <HeaderInfo t={t} />}
			<HeaderBackground activeBurger={activeBurger} />
			{isMobile && activeBurger && <ThemesToggle />}
		</div>
	);
});

export default memo(Header);
