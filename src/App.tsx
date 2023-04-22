import React, { lazy, useCallback, useRef, useState } from 'react';

import useIsMobile from './hooks/useIsMobile';
import useScrollObserver from './hooks/useScrollObserver';
import useSectionsObserver from './hooks/useSectionsObserver';

import './App.css';

const Header = lazy(() => import('./sections/header/Header'));
const About = lazy(() => import('./sections/about/About'));
const Advantages = lazy(() => import('./sections/advantages/Advantages'));
const Technologies = lazy(() => import('./sections/technologies/Technologies'));
const FormBlock = lazy(() => import('./sections/formBlock/FormBlock'));
const ThemesToggle = lazy(() => import('./components/theme/ThemesToggle'));
const FixHeader = lazy(() => import('./components/fixHeader/FixHeader'));

const scrollOptions = Object.freeze({
	root: window.document,
	rootMargin: '110px',
	threshold: 0,
});

function App() {
	const menuRef = useRef<HTMLUListElement | null>(null);
	const aboutRef = useRef<HTMLDivElement | null>(null);
	const advantagesRef = useRef<HTMLDivElement | null>(null);
	const technologiesRef = useRef<HTMLDivElement | null>(null);
	const formRef = useRef<HTMLDivElement | null>(null);

	const [showHeader, setShowHeader] = useState(false);
	const isMobile = useIsMobile();

	const handleHeaderVisibility = useCallback((value: boolean) => {
		setShowHeader(value);
	}, []);

	useScrollObserver(isMobile, menuRef, handleHeaderVisibility, scrollOptions);

	useSectionsObserver(
		menuRef,
		{
			root: null,
			threshold: [0.5, 0.2, 0.5, 0.4],
		},
		aboutRef,
		advantagesRef,
		technologiesRef,
		formRef
	);

	return (
		<div className="App">
			<Header key={'section-header'} />
			<About key={'section-about'} ref={aboutRef} />
			<Advantages key={'section-advantages'} ref={advantagesRef} />
			<Technologies key={'section-technologies'} ref={technologiesRef} />
			<FormBlock key={'section-form'} ref={formRef} />
			<FixHeader key={'header-fix'} showHeader={showHeader} ref={menuRef} />
			{!isMobile && <ThemesToggle key={'toggle-theme'} />}
		</div>
	);
}

export default App;
