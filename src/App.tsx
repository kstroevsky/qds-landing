import React, { lazy, useCallback, useRef, useState } from 'react';

import useIsMobile from './hooks/useIsMobile';
import useScrollObserver from './hooks/useScrollObserver';
import useSectionsObserver from './hooks/useSectionsObserver';
import { headerObserverOptions, menuObserverOptions } from './shared/constants';

import './App.css';

const Header = lazy(() => import('./sections/header/Header'));
const About = lazy(() => import('./sections/about/About'));
const Advantages = lazy(() => import('./sections/advantages/Advantages'));
const Technologies = lazy(() => import('./sections/technologies/Technologies'));
const FormBlock = lazy(() => import('./sections/formBlock/FormBlock'));
const ThemesToggle = lazy(() => import('./components/theme/ThemesToggle'));
const FixHeader = lazy(() => import('./components/fixHeader/FixHeader'));

function App() {
	const headerRef = useRef<HTMLDivElement | null>(null);
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

	useScrollObserver(
		isMobile,
		headerRef,
		handleHeaderVisibility,
		headerObserverOptions
	);

	useSectionsObserver(
		menuRef,
		isMobile,
		menuObserverOptions,
		aboutRef,
		advantagesRef,
		technologiesRef,
		formRef
	);

	return (
		<div className="App">
			<Header key={'section-header'} ref={headerRef} />
			<About key={'section-about'} ref={aboutRef} />
			<Advantages key={'section-advantages'} ref={advantagesRef} />
			<Technologies key={'section-technologies'} ref={technologiesRef} />
			<FormBlock key={'section-form'} ref={formRef} />
			{!isMobile && (
				<>
					<FixHeader key={'header-fix'} showHeader={showHeader} ref={menuRef} />
					<ThemesToggle key={'toggle-theme'} />
				</>
			)}
		</div>
	);
}

export default App;
