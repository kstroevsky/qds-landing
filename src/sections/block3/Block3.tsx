import classnames from 'classnames';

import s from './Block3.module.scss';

const Block3 = () => {
	return (
		<div className={s.block} id={"advantages"}>
			<div className={classnames(s.section, s.section_first)}>
				<div className={s.section__right}></div>
			</div>
			<div className={classnames(s.section, s.section_second)}>
				<div className={s.section__left}></div>
			</div>
			<div className={classnames(s.section, s.section_third)}>
				<div className={s.section__right}></div>
			</div>
			<div className={classnames(s.background)}></div>
		</div>
	);
};

export default Block3;
