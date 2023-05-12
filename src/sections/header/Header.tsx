import { forwardRef, memo, useCallback, useEffect, useState } from 'react';

import useIsMobile from '../../hooks/useIsMobile';

import HeaderBackground from '../../components/HeaderBackground';
import HeaderNav from '../../components/HeaderNav';
import HeaderInfo from '../../components/HeaderInfo';
import ThemesToggle from '../../components/theme/ThemesToggle';

import s from './header.module.scss';
import LanguageFlags from "../../components/LanguageFlags";

const Header = forwardRef<HTMLDivElement>((_, ref) => {
	const isMobile = useIsMobile();
	const [activeBurger, setActiveBurger] = useState<boolean>(false);
	const handleBurgerClick = useCallback(() => {
		setActiveBurger((prev) => !prev);
	}, []);

	useEffect(() => {
		if (!isMobile) {
			setActiveBurger(false);
		}
	}, [isMobile]);

	useEffect(() => {
		if (window.innerWidth < 1180) {
			document.body.style.overflowY = activeBurger ? 'hidden' : 'auto';
		}
	}, [activeBurger]);

	return (
		<div className={s.bannerWrapper} ref={ref}>
			<HeaderNav
				activeBurger={activeBurger}
				onBurgerClick={handleBurgerClick}
			/>
			{!activeBurger && <HeaderInfo/>}
			<HeaderBackground activeBurger={activeBurger}/>
			<div className={s.wrapperPanel}>
				<div className={s.panel}>
					{isMobile && activeBurger && <ThemesToggle />}
					{isMobile && activeBurger && <LanguageFlags />}
				</div>
			</div>


		</div>
	);
});

export default memo(Header);
