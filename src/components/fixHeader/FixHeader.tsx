import { forwardRef, memo } from 'react';
import classNames from 'classnames';
import { ENavigationTitles } from '../../shared/constants';

import s from './FixHeader.module.scss';

interface FixHeaderProps {
	showHeader: boolean;
	t: any;
}

const FixHeader = forwardRef<HTMLUListElement, FixHeaderProps>(
	({ showHeader, t }, ref) => (
		<header className={classNames(s.fixHeader, { [s.fadeIn]: showHeader })}>
			<div className={s.titleDiv}>
				<h1>{'QDS SOFTWARE'}</h1>
			</div>
			<nav className={s.fixNav}>
				<ul className={s.fixNav__menu} ref={ref}>
					{Object.values(ENavigationTitles).map((el) => (
						<li key={el} data-section={el} className={s.fixNav__menu_item}>
							<a href={`#${el}`}>{t(`navigate.${el}`).toUpperCase()}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
);

export default memo(FixHeader);
