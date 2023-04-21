import { forwardRef, memo } from 'react';
import { Link } from 'react-scroll';
import { ENavigationTitles } from '../../shared/constants';

import s from './FixHeader.module.scss';
import { useIsMobile } from '../../hooks/useIsMobile';

interface FixHeaderProps {
	showHeader: boolean;
}

const FixHeader = forwardRef<HTMLUListElement, FixHeaderProps>(
	({ showHeader }, ref) => (
		<header className={`${s.fixHeader} ${showHeader ? s.fadeIn : ''}`}>
			{!useIsMobile() && (
				<div className={s.titleDiv}>
					<h1>QDS SOFTWARE</h1>
				</div>
			)}
			<nav className={s.fixNav}>
				<ul className={s.fixNav__menu} ref={ref}>
					{Object.keys(ENavigationTitles).map((el) => (
						<li key={el} data-section={el} className={s.fixNav__menu_item}>
							<Link
								to={el.toLowerCase()}
								spy={true}
								smooth={true}
								duration={500}
							>
								{el}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
);

export default memo(FixHeader);
