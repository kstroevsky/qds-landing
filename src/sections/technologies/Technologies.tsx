import { forwardRef, memo, useState, KeyboardEvent } from 'react';

import Carousel from 'react-simply-carousel';

import { useTranslation } from 'react-i18next';

import { ENavigationTitles, slides } from '../../shared/constants';

import s from './Technologies.module.scss';

const Technologies = forwardRef<HTMLDivElement>((_, ref) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const { t } = useTranslation();

	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
		if (e.key === 'ArrowRight') {
			if (activeIndex > (slides.length - 2)) {
				setActiveIndex(0)
			} else {
				setActiveIndex(activeIndex + 1);
			}
		}
		if (e.key === 'ArrowLeft') {
			if (activeIndex === 0) {
				setActiveIndex(slides.length - 1)
			} else {
				setActiveIndex(activeIndex - 1);
			}
		}
	};

	return (
		<div className={s.block} id={ENavigationTitles.TECHNOLOGIES} ref={ref} onKeyDown={handleKeyDown} tabIndex={0}>
			<h1 className={s.title}>{t('navigate.technologies')}</h1>
			<div className={s.table}>
				<h1 className={s.table__title}>{slides[activeIndex].alt}</h1>
				<Carousel
					containerProps={{
						style: {
							marginTop: '5%',
							userSelect: 'none'
						}
					}}
					centerMode={true}
					infinite={true}
					swipeTreshold={60}
					autoplay={true}
					autoplayDelay={3000}
					activeSlideIndex={activeIndex}
					onRequestChange={setActiveIndex}
					updateOnItemClick={true}
					responsiveProps={[{minWidth: 1280, itemsToShow: 3}, {maxWidth: 1280, itemsToShow: 1}]}
					forwardBtnProps={{show: false}}
					backwardBtnProps={{show: false}}
					itemsToShow={3}
					itemsToScroll={1}
					speed={400}
				>
					{slides.map((slide, idx) => (
						<div className={s.slide_block} key={idx}>
							<img className={s.slide_img} src={slide.src} alt={slide.alt} />
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
});

export default memo(Technologies);