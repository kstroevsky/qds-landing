import { forwardRef, memo, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

import ThemesToggle from '../../components/theme/ThemesToggle';
import useIsMobile from '../../hooks/useIsMobile';
import { ENavigationTitles } from '../../shared/constants';

import s from './header.module.scss';

const Header = forwardRef<HTMLDivElement>((_, ref) => {
	const [activeBurger, setActiveBurger] = useState(false);
	const isMobile = useIsMobile();

	const handleBurgerClick = useCallback(() => {
		setActiveBurger((prev) => !prev);
	}, []);

	useEffect(() => {
		if (!isMobile) {
			setActiveBurger(false);
		}
	}, [isMobile]);

	useEffect(() => {
		document.body.style.overflow = activeBurger ? 'hidden' : 'auto';
	}, [activeBurger]);

	return (
		<div className={s.bannerWrapper} ref={ref}>
			{!activeBurger && (
				<div className={s.info}>
					<h1 className={s.title}>{'QDS SOFTWARE'}</h1>
					<button className={s.button}>
						<a href="#">{'CONTACT US'}</a>
					</button>
				</div>
			)}
			<nav className={classNames(s.nav, { [s.nav_mobile]: activeBurger })}>
				<ul className={classNames(s.menu, { [s.menu_mobile]: activeBurger })}>
					{Object.values(ENavigationTitles).map((el) => (
						<li
							className={`${s.menu__item} ${
								activeBurger && s.menu_mobile__item
							}`}
							key={el}
						>
							<a href={`#${el}`}>{el.toUpperCase()}</a>
						</li>
					))}
				</ul>
			</nav>
			<div className={s.backgroundContainer}>
				<div className={s.mainBackground}>
					<div className={s.leftBackground}></div>
					{!activeBurger && <div className={s.rightBackground}></div>}
				</div>
			</div>

			<div
				className={`${s.burger} ${activeBurger && s.burger_active}`}
				onClick={handleBurgerClick}
			>
				<span className={s.line}></span>
			</div>
			{isMobile && activeBurger && <ThemesToggle />}
		</div>
	);
});

export default memo(Header);
