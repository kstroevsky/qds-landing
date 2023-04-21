import { forwardRef, memo } from 'react';
import classnames from 'classnames';
import useIsMobile from '../../hooks/useIsMobile';
import { ENavigationTitles } from '../../shared/constants';

import s from './Advantages.module.scss';

const Advantages = forwardRef<HTMLDivElement>((_, ref) => {
	const isMobile = useIsMobile();

	return (
		<div className={s.block} id={ENavigationTitles.ADVANTAGES} ref={ref}>
			<div>
				<div className={classnames(s.titleList)}>
					<h2 className={`${s.titleList__item} ${s.titleList__item_first}`}>
						{'SPEED UP DEVELOPMENT'}
					</h2>
					<h2 className={`${s.titleList__item} ${s.titleList__item_second}`}>
						{'INCREASE QUALITY'}
					</h2>
					<h2 className={`${s.titleList__item} ${s.titleList__item_third}`}>
						{'REDUCE COSTS'}
					</h2>
				</div>
				<h1 className={s.titleBottom}>{'WHAT WE DO'}</h1>
				<div className={s.bottom}></div>
			</div>
			<div className={classnames(s.section, s.section_first)}>
				<div className={s.section__right}></div>
			</div>
			<div className={classnames(s.section, s.section_second)}>
				<div className={s.section__left}></div>
			</div>
			<div className={classnames(s.section, s.section_third)}>
				<div className={s.section__right}></div>
			</div>
			{!isMobile && <div className={classnames(s.background)} />}
		</div>
	);
});

export default memo(Advantages);
