import classnames from 'classnames';
import { FC, forwardRef } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

import s from './Advantages.module.scss';

const Advantages = forwardRef<HTMLDivElement>((_, ref) => {
	const isMobile = useIsMobile();

	return (
		<div className={s.block} ref={ref}>
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

export default Advantages;
