import { useEffect, useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import graphQl from '../../assets/slides/graphQL.svg';
import mobx from '../../assets/slides/mobx.svg';
import mongo from '../../assets/slides/mongodb.svg';
import nestJS from '../../assets/slides/NestJS 1.svg';
import nodeJS from '../../assets/slides/node.js.svg';
import postgre from '../../assets/slides/postgreSQL.svg';
import react from '../../assets/slides/react.svg';
import recoil from '../../assets/slides/recoil-js.svg';
import redux from '../../assets/slides/redux.svg';
import reduxsaga from '../../assets/slides/redux-saga.svg';
import three from '../../assets/slides/three.js.svg';
import vue from '../../assets/slides/vue.svg';
import webpack from '../../assets/slides/webpack.svg';

import s from './Block4.module.scss';

const Block4 = () => {
	const [slides, setSlides] = useState<JSX.Element[]>([]);

	useEffect(() => {
		setSlides([
			<div key={1}>
				<img src={graphQl} alt="graphQL" />
			</div>,
			<div key={2}>
				<img src={mobx} alt="mobx" />
			</div>,
			<div key={3}>
				<img src={mongo} alt="mongo" />
			</div>,
			<div key={4}>
				<img src={nestJS} alt="nestJS" />
			</div>,
			<div key={5}>
				<img src={nodeJS} alt="nodeJS" />
			</div>,
			<div key={6}>
				<img src={postgre} alt="postgre" />
			</div>,
			<div key={7}>
				<img src={react} alt="react" />
			</div>,
			<div key={8}>
				<img src={recoil} alt="recoil" />
			</div>,
			<div key={9}>
				<img src={redux} alt="redux" />
			</div>,
			<div key={10}>
				<img src={reduxsaga} alt="reduxsaga" />
			</div>,
			<div key={11}>
				<img src={three} alt="three" />
			</div>,
			<div key={12}>
				<img src={vue} alt="vue" />
			</div>,
			<div key={13}>
				<img src={webpack} alt="webpack" />
			</div>,
		]);
	}, []);

	return (
		<div className={s.block}>
			<h1 className={s.title}>TECHNOLOGY</h1>
			<div className={s.table}>
				<Carousel
					infiniteLoop={true}
					autoPlay={true}
					centerMode={true}
					showThumbs={false}
					showArrows={false}
					showStatus={false}
					showIndicators={false}
					swipeable={true}
					stopOnHover={true}
					transitionTime={500}
					interval={1000}
					useKeyboardArrows={true}
				>
					{slides}
				</Carousel>
			</div>
		</div>
	);
};

export default Block4;