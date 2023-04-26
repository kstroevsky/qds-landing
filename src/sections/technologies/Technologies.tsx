import { forwardRef, memo, useState } from 'react';

import Carousel from 'react-simply-carousel';
import { useTranslation } from 'react-i18next';

import useIsMobile from '../../hooks/useIsMobile';
import { ENavigationTitles, slides } from '../../shared/constants';

import rightArrow from "../../assets/slides/arrow-right.png";
import backArrow from "../../assets/slides/back-button.png";

import s from './Technologies.module.scss';

const Technologies = forwardRef<HTMLDivElement>((_, ref) => {
	const isMobile = useIsMobile();
	const [activeIndex, setActiveIndex] = useState(0);
	const { t } = useTranslation();

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
					autoplay={true}
					autoplayDelay={3000}
					activeSlideIndex={activeIndex}
					onRequestChange={setActiveIndex}
					responsiveProps={[{minWidth: 1280, itemsToShow: 3}, {maxWidth: 1280, itemsToShow: 1}]}
					forwardBtnProps={{
						show: !isMobile && true,
						children: <img src={rightArrow}/>,
						style: {
							width: "4.9vw",
							alignSelf: 'center',
							background: "none",
							border: "none",
							outline: "none",
							cursor: "pointer",
						},
					}}
					backwardBtnProps={{
						show: !isMobile && true,
						children: <img src={backArrow}/>,
						style: {
							width: "4.9vw",
							alignSelf: 'center',
							background: "none",
							border: "none",
							outline: "none",
							cursor: "pointer"
						},
					}}
					dotsNav={ {
						show: !isMobile && true,
						itemBtnProps: {
							style: {
								height: 16,
								width: 16,
								borderRadius: '50%',
								border: 0,
								opacity: 0.5,
								marginRight: 5,
								cursor: "pointer",
								marginTop: "1.5%"
							},
						},
						activeItemBtnProps: {
							style: {
								height: 16,
								width: 16,
								borderRadius: '50%',
								border: 0,
								background: 'black',
								opacity: 1,
								marginRight: 5,
								cursor: "pointer",
								marginTop: "1.5%"
							},
						},
					}}
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
