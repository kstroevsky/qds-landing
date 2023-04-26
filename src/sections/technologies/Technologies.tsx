import { forwardRef, memo, useState } from 'react';
import Carousel from 'react-simply-carousel';

import Slide from '../../components/Slide';
import SlideWrapper from '../../components/SlideWrapper';
import useIsMobile from '../../hooks/useIsMobile';
import { ENavigationTitles, slides } from '../../shared/constants';
import { useTranslation } from 'react-i18next';

import s from './Technologies.module.scss';

const Technologies = forwardRef<HTMLDivElement>((_, ref) => {
	const isMobile = useIsMobile();
	const [activeIndex, setActiveIndex] = useState(0);
	const { t } = useTranslation();

	console.log(activeIndex);

	return (
		<div className={s.block} id={ENavigationTitles.TECHNOLOGIES} ref={ref}>
			<h1 className={s.title}>{t('navigate.technologies')}</h1>
			<div className={s.table}>
				<h1 className={s.table__title}>{slides[activeIndex].alt}</h1>
				<Carousel
					containerProps={{
						style: {
							width: '100%',
							justifyContent: 'space-between',
							userSelect: 'none',
						},
					}}
					centerMode={true}
					infinite={true}
					swipeTreshold={60}
					activeSlideIndex={activeIndex}
					activeSlideProps={{
						style: {
							background: 'blue',
						},
					}}
					onRequestChange={setActiveIndex}
					forwardBtnProps={{
						children: '>',
						style: {
							width: 60,
							height: 60,
							minWidth: 60,
							alignSelf: 'center',
						},
					}}
					backwardBtnProps={{
						children: '<',
						style: {
							width: 60,
							height: 60,
							minWidth: 60,
							alignSelf: 'center',
						},
					}}
					dotsNav={{
						show: true,
						itemBtnProps: {
							style: {
								height: 16,
								width: 16,
								borderRadius: '50%',
								border: 0,
							},
						},
						activeItemBtnProps: {
							style: {
								height: 16,
								width: 16,
								borderRadius: '50%',
								border: 0,
								background: 'black',
							},
						},
					}}
					itemsToShow={5}
					itemsToScroll={1}
					speed={400}
				>
					{slides.map((slide, idx) => (
						<div
							key={idx}
							style={{
								// background: 'yellow',
								width: 150,
								height: 300,
								border: '30px solid white',
								textAlign: 'center',
								lineHeight: '240px',
								boxSizing: 'border-box',
							}}
						>
							<div className={s.slide_block} style={{ minWidth: '33.3%' }}>
								<img className={s.slide_img} src={slide.src} alt={slide.alt} />
							</div>
							{/* <SlideWrapper
								isSelected={activeIndex === idx}
								isMobile={isMobile}
								style={{}}
							> */}
							{/* <Slide slide={slide} /> */}
							{/* </SlideWrapper> */}
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
});

export default memo(Technologies);
