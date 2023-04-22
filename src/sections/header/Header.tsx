import { memo, useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-scroll';

import ThemesToggle from '../../components/theme/ThemesToggle';
import useIsMobile from '../../hooks/useIsMobile';
import { ENavigationTitles } from '../../shared/constants';

import s from './header.module.scss';

const Header: FC = () => {
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
		<div className={s.bannerWrapper}>
			{!activeBurger && (
				<div className={s.info}>
					<h1 className={s.title}>{'QDS SOFTWARE'}</h1>
					<button className={s.button}>
						<a href="#">{'CONTACT US'}</a>
					</button>
				</div>
			)}
			<nav className={`${s.nav} ${activeBurger && s.nav_mobile}`}>
				<ul className={`${s.menu} ${activeBurger && s.menu_mobile}`}>
					{Object.keys(ENavigationTitles).map((el) => (
						<li
							className={`${s.menu__item} ${
								activeBurger && s.menu_mobile__item
							}`}
							key={el}
						>
							<Link
								to={el.toLowerCase()}
								spy={true}
								smooth={true}
								duration={500}
								onClick={handleBurgerClick}
							>
								{el}
							</Link>
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
};

export default memo(Header);
