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

const slides = [
	{ key: 1, src: graphQL, alt: 'graphQL' },
	{ key: 2, src: mobx, alt: 'mobx' },
	{ key: 3, src: mongodb, alt: 'mongodb' },
	{ key: 4, src: nestJS, alt: 'nestJS' },
	{ key: 5, src: nodeJS, alt: 'nodeJS' },
	{ key: 6, src: postgreSQL, alt: 'postgreSQL' },
	{ key: 7, src: react, alt: 'react' },
	{ key: 8, src: recoil, alt: 'recoil' },
	{ key: 9, src: redux, alt: 'redux' },
	{ key: 10, src: reduxSaga, alt: 'reduxsaga' },
	{ key: 11, src: threeJS, alt: 'three' },
	{ key: 12, src: vue, alt: 'vue' },
	{ key: 13, src: webpack, alt: 'webpack' },
];

const Block4 = () => {
	return (
		<div className={s.block}>
			<h1 className={s.title}>TECHNOLOGY</h1>
			<div className={s.table}>
				<Carousel
					infiniteLoop
					autoPlay
					centerMode
					showThumbs={false}
					showArrows={false}
					showStatus={false}
					showIndicators={false}
					selectedItem={3}
					swipeable
					stopOnHover
					transitionTime={500}
					interval={1000000}
					useKeyboardArrows
				>
					{slides.map((slide) => (
						<div className={s.slide} key={slide.key}>
							<img src={slide.src} alt={slide.alt} />
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Block4;