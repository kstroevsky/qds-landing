import {useCallback, useEffect, useState} from "react";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import graphQL from '../../assets/slides/graphQL.svg';
import mobx from '../../assets/slides/mobx.svg';
import mongodb from '../../assets/slides/mongodb.svg';
import nestJS from '../../assets/slides/NestJS 1.svg';
import nodeJS from '../../assets/slides/node.js.svg';
import postgreSQL from '../../assets/slides/postgreSQL.svg';
import react from '../../assets/slides/react.svg';
import recoil from '../../assets/slides/recoil-js.svg';
import redux from '../../assets/slides/redux.svg';
import reduxSaga from '../../assets/slides/redux-saga.svg';
import threeJS from '../../assets/slides/three.js.svg';
import vue from '../../assets/slides/vue.svg';
import webpack from '../../assets/slides/webpack.svg';

import s from './Block4.module.scss';
import {logDOM} from "@testing-library/react";


const slides = [
	{ key: 1, src: graphQL, alt: 'GraphQL' },
	{ key: 2, src: mobx, alt: 'Mobx' },
	{ key: 3, src: mongodb, alt: 'Mongodb' },
	{ key: 4, src: nestJS, alt: 'NestJS' },
	{ key: 5, src: nodeJS, alt: 'NodeJS' },
	{ key: 6, src: postgreSQL, alt: 'PostgreSQL' },
	{ key: 7, src: react, alt: 'React' },
	{ key: 8, src: recoil, alt: 'Recoil' },
	{ key: 9, src: redux, alt: 'Redux' },
	{ key: 10, src: reduxSaga, alt: 'ReduxSaga' },
	{ key: 11, src: threeJS, alt: 'ThreeJS' },
	{ key: 12, src: vue, alt: 'Vue' },
	{ key: 13, src: webpack, alt: 'Webpack' },
]

const renderSlides = () => {
	return slides.map((slide) => (
		<div key={slide.key} style={{ minWidth: "auto" }}>
			<img className={s.slide_img} src={slide.src} alt={slide.alt} />
		</div>
	));
};

const Block4 = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleResize = useCallback(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	const checkMobileDevice = windowWidth <= 1280;

	const CustomSlide = ({ index, ...props }: any) => {
		const selectedStyle = props.isSelected === true && !checkMobileDevice ? {
			paddingBottom: "30px",
			borderBottom: "10px solid #a171e9",
			width: "90%",
			margin: "0 auto",
			borderRadius: "6px"
		} : {};

		return (
			<div {...props} style={{ ...props.style, ...selectedStyle }}>
				{props.children}
			</div>
		);
	};

	return (
		<div className={s.block}>
			<h1 className={s.title}>TECHNOLOGY</h1>
			<div className={s.table}>
				<h1 className={s.table__title}>{slides.find(el => el.key - 1 === activeIndex)?.alt}</h1>
				<Carousel
					infiniteLoop
					autoPlay
					centerMode
					centerSlidePercentage={checkMobileDevice ? 100 : 33.3}
					showThumbs={false}
					showArrows={false}
					showStatus={false}
					showIndicators={false}
					swipeable
					transitionTime={500}
					interval={1000}
					onChange={index => setActiveIndex(index)}
					renderItem={(item, props: any) => (
						<CustomSlide {...props} index={props.index}>
							{item}
						</CustomSlide>
					)}
				>
					{renderSlides()}
				</Carousel>
			</div>
		</div>
	);
};

export default Block4;