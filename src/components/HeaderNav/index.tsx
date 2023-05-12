import {memo} from 'react';
import type { FC } from 'react';
import classNames from 'classnames';

import { ENavigationTitles } from '../../shared/constants';

import s from './headerNav.module.scss';
import {useTranslation} from "react-i18next";

interface HeaderNavProps {
	activeBurger: boolean;
	onBurgerClick: () => void;
}

const HeaderNav: FC<HeaderNavProps> = ({ activeBurger, onBurgerClick}) => {
	const {t} = useTranslation();

	return (
		<>
			<div
				className={classNames(s.burger, {[s.burger_active]: activeBurger})}
				onClick={onBurgerClick}
			>
				<span className={s.line}></span>
			</div>
			<nav className={classNames(s.nav, {[s.nav_mobile]: activeBurger})}>
				<ul className={classNames(s.menu, {[s.menu_mobile]: activeBurger})}>
					{Object.values(ENavigationTitles).map((el) => (
						<li
							key={el}
							className={classNames(s.menu__item, {
								[s.menu_mobile__item]: activeBurger,
							})}
						>
							<a
								href={`#${el}`}
								onClick={() => setTimeout(() => onBurgerClick(), 500)}>
								{t(`navigate.${el}`).toUpperCase()}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	)
};

export default memo(HeaderNav);
