import {memo} from 'react';
import type { FC } from 'react';
import classNames from 'classnames';

import { ENavigationTitles } from '../../shared/constants';

import s from './headerNav.module.scss';

interface HeaderNavProps {
	activeBurger: boolean;
	onBurgerClick: () => void;
	t: any;
}

const HeaderNav: FC<HeaderNavProps> = ({ activeBurger, onBurgerClick, t }) => (
	<>
		<div
			className={classNames(s.burger, { [s.burger_active]: activeBurger })}
			onClick={onBurgerClick}
		>
			<span className={s.line}></span>
		</div>
		<nav className={classNames(s.nav, { [s.nav_mobile]: activeBurger })}>
			<ul className={classNames(s.menu, { [s.menu_mobile]: activeBurger })}>
				{Object.values(ENavigationTitles).map((el) => (
					<li
						key={el}
						className={classNames(s.menu__item, {
							[s.menu_mobile__item]: activeBurger,
						})}
					>
						<a href={`#${el}`}>{t(`navigate.${el}`).toUpperCase()}</a>
					</li>
				))}
			</ul>
		</nav>
	</>
);

export default memo(HeaderNav);
