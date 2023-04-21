import { forwardRef, memo } from 'react';
import { ENavigationTitles } from '../../shared/constants';

import s from './About.module.scss';

const About = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<div className={s.wrapper} ref={ref} id={ENavigationTitles.ABOUT}>
			<div className={s.blockTwo}>
				<div>
					<h1 className={s.titleTop}>WHO WE ARE</h1>
					<div className={s.top}></div>
				</div>
			</div>
		</div>
	);
});

export default memo(About);
