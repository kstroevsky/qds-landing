import { memo } from 'react';
import type { FC } from 'react';

import s from './styles.module.scss';

interface SlideProps {
	slide: Record<string, any>;
}

const Slide: FC<SlideProps> = ({ slide }) => {
	return (
		<div style={{ minWidth: 'auto' }}>
			<img className={s.slide_img} src={slide.src} alt={slide.alt} />
		</div>
	);
};

export default memo(Slide);