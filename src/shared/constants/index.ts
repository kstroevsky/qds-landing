export const formOptions = [
	'UI/UX design',
	'Frontend',
	'Graphic design',
	'Devops',
	'Architecture',
];

const path = '/images/slides/';

export const slides: Record<string, any>[] = [
	{ key: 0, src: `${path}webpack.svg`, alt: 'Webpack' },
	{ key: 1, src: `${path}graphQL.svg`, alt: 'GraphQL' },
	{ key: 2, src: `${path}mobx.svg`, alt: 'Mobx' },
	{ key: 3, src: `${path}mongodb.svg`, alt: 'Mongodb' },
	{ key: 4, src: `${path}NestJS.svg`, alt: 'NestJS' },
	{ key: 5, src: `${path}node.js.svg`, alt: 'NodeJS' },
	{ key: 6, src: `${path}postgreSQL.svg`, alt: 'PostgreSQL' },
	{ key: 7, src: `${path}react.svg`, alt: 'React' },
	{ key: 8, src: `${path}recoil-js.svg`, alt: 'Recoil' },
	{ key: 9, src: `${path}redux.svg`, alt: 'Redux' },
	{ key: 10, src: `${path}redux-saga.svg`, alt: 'ReduxSaga' },
	{ key: 11, src: `${path}three.js.svg`, alt: 'ThreeJS' },
	{ key: 12, src: `${path}vue.svg`, alt: 'Vue' },
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

export enum ELanguages {
	UA = 'ua',
	EN = 'en',
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

export const imageSizes = [1920, 1680, 1440, 1366, 1280, 1024, 768, 480];
