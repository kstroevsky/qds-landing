import { forwardRef, memo, useEffect, useRef, useState } from 'react';
import Carousel from 'react-simply-carousel';

import Slide from '../../components/Slide';
import SlideWrapper from '../../components/SlideWrapper';
import useIsMobile from '../../hooks/useIsMobile';
import { ENavigationTitles, slides } from '../../shared/constants';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import s from './Technologies.module.scss';

const Technologies = forwardRef<HTMLDivElement>((_, ref) => {
	const carouselRef = useRef(null);
	const isMobile = useIsMobile();
	const [slidesList, setSlidesList] = useState<Record<string, string>[]>([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isActive, setIsActive] = useState(true);

	console.log(activeIndex)

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

	return (
		<div className={s.block} id={ENavigationTitles.TECHNOLOGIES} ref={ref}>
			<h1 className={s.title}>{'TECHNOLOGIES'}</h1>
			<div className={s.table}>
				<h1 className={s.table__title}>
					{slidesList.find((_, idx) => idx === activeIndex)?.alt}
				</h1>
				{/*<Carousel*/}
				{/*	ref={carouselRef}*/}
				{/*	autoFocus={true}*/}
				{/*	selectedItem={activeIndex}*/}
				{/*	autoPlay={isActive}*/}
				{/*	centerMode={true}*/}
				{/*	swipeable={true}*/}
				{/*	emulateTouch={true}*/}
				{/*	showThumbs={false}*/}
				{/*	showArrows={isMobile}*/}
				{/*	showStatus={false}*/}
				{/*	showIndicators={false}*/}
				{/*	stopOnHover={true}*/}
				{/*	useKeyboardArrows={true}*/}
				{/*	preventMovementUntilSwipeScrollTolerance={true}*/}
				{/*	transitionTime={500}*/}
				{/*	interval={3000}*/}
				{/*	centerSlidePercentage={isMobile ? 100 : 20}*/}
				{/*	onChange={handleIndexChange}*/}
				{/*	onClickItem={(index) => carouselRef.current?.moveTo(index)}*/}
				{/*	renderItem={(item, props: any) => (*/}
				{/*		<SlideWrapper*/}
				{/*			{...props}*/}
				{/*			isMobile={isMobile}*/}
				{/*			onClick={() => setIsActive((prev) => !prev)}*/}
				{/*		>*/}
				{/*			{item}*/}
				{/*		</SlideWrapper>*/}
				{/*	)}*/}
				{/*>*/}
				{/*	{slidesList.map((slide, idx) => (*/}
				{/*		<Slide slide={slide} key={`slide-${idx}`} />*/}
				{/*	))}*/}
				{/*</Carousel>*/}
				<Carousel
					// containerProps={{
					// 	style: {
					// 		width: "100%",
					// 		justifyContent: "space-between",
					// 		userSelect: "none"
					// 	}
					// }}
					autoplay
					infinite={true}
					autoplayDelay={10000000}
					centerMode={true}
					activeSlideIndex={activeIndex}
					responsiveProps={[{minWidth: 1024, maxWidth: 5000, itemsToShow: 3}, {minWidth: 428, maxWidth: 1024, itemsToShow: 1}]}
					onRequestChange={setActiveIndex}
					forwardBtnProps={{
						children: ">",
						style: {
							width: 60,
							height: 60,
							minWidth: 60,
							alignSelf: "center"
						}
					}}
					backwardBtnProps={{
						children: "<",
						style: {
							width: 60,
							height: 60,
							minWidth: 60,
							alignSelf: "center"
						}
					}}
					dotsNav={{
					  show: true,
					  itemBtnProps: {
					    style: {
					      height: 16,
					      width: 16,
					      borderRadius: "50%",
					      border: 0
					    }
					  },
					  activeItemBtnProps: {
					    style: {
					      height: 16,
					      width: 16,
					      borderRadius: "50%",
					      border: 0,
					      background: "black"
					    }
					  }
					}}
					itemsToShow={3}
					speed={400}
				>
					{slidesList.map((slide) => (
						<Slide slide={slide} key={slide.key} />
						// <div style={{width: "21vw"}} key={slide.key}>{slide.key}</div>
					))}
				</Carousel>
			</div>
		</div>
	);
});

export default memo(Technologies);
