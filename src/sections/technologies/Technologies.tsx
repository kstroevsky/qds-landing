import { forwardRef, memo, useEffect, useRef, useState } from 'react';

import Slide from '../../components/Slide';
import SlideWrapper from '../../components/SlideWrapper';
import useIsMobile from '../../hooks/useIsMobile';
import { ENavigationTitles, slides } from '../../shared/constants';

import s from './Technologies.module.scss';

const Technologies = forwardRef<HTMLDivElement>((_, ref) => {
	const carouselRef = useRef(null);
	const isMobile = useIsMobile();
	const [slidesList, setSlidesList] = useState<Record<string, string>[]>([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		setSlidesList([...slides]);
	}, []);

	// const handleIndexChange = (index: number) => {
	// 	if (index === 1) {
	// 		setSlidesList([...slidesList.slice(-1), ...slidesList.slice(0, -1)]);
	// 	} else if (index === slidesList.length - 1) {
	// 		setSlidesList([...slidesList.slice(1), slidesList[0]]);
	// 	}
	//
	// 	setActiveIndex(index);
	// };

	// Why do you use react-responsive-carousel instead the library that I sent you?
	return (
		<div className={s.block} id={ENavigationTitles.TECHNOLOGIES} ref={ref}>
			<h1 className={s.title}>{'TECHNOLOGIES'}</h1>
			<div className={s.table}>
				<h1 className={s.table__title}>
					{slidesList.find((_, idx) => idx === activeIndex)?.alt}
				</h1>
			</div>
		</div>
	);
});

export default memo(Technologies);
