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

export const formOptions = [
	'UI/UX design',
	'Frontend',
	'Graphic design',
	'Devops',
	'Architecture',
];

export const slides: Record<string, any>[] = [
	{ key: 0, src: webpack, alt: 'Webpack' },
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
];

export enum EThemes {
	DARK = 'dark',
	LIGHT = 'light',
}

export enum ENavigationTitles {
	ABOUT = 'about',
	ADVANTAGES = 'advantages',
	TECHNOLOGIES = 'technologies',
	CONTACTS = 'contacts',
}

export enum EAdvantages {
	FIRST = 'first',
	SECOND = 'second',
	THIRD = 'third',
}

export const headerObserverOptions = Object.freeze({
	root: null,
	rootMargin: '-50%',
	threshold: 0,
});

export const menuObserverOptions = Object.freeze({
	root: null,
	threshold: [0.5, 0.2, 0.5, 0.4],
});
