import { forwardRef } from 'react';
import s from './About.module.scss';

const About = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<div className={s.wrapper} ref={ref}>
			<div className={s.blockTwo}>
				<div id={'about'}>
					<h1 className={s.titleTop}>WHO WE ARE</h1>
					<div className={s.top}></div>
				</div>
				<div id={'advantages'}>
					<>
						<div className={s.titleList}>
							<h2 className={`${s.titleList__item} ${s.titleList__item_first}`}>
								SPEED UP DEVELOPMENT
							</h2>
							<h2
								className={`${s.titleList__item} ${s.titleList__item_second}`}
							>
								INCREASE QUALITY
							</h2>
							<h2 className={`${s.titleList__item} ${s.titleList__item_third}`}>
								REDUCE COSTS
							</h2>
						</div>
						<h1 className={s.titleBottom}>WHAT WE DO</h1>
					</>
					<div className={s.bottom}></div>
				</div>
			</div>
		</div>
	);
});

export default About;
