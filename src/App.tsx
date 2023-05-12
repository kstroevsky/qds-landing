import { Suspense, lazy, useCallback, useRef, useState } from 'react';

import useIsMobile from './hooks/useIsMobile';
import useScrollObserver from './hooks/useScrollObserver';
import useSectionsObserver from './hooks/useSectionsObserver';
import { headerObserverOptions, menuObserverOptions } from './shared/constants';
import ThemeProvider from './shared/context';

import FixHeader from './components/fixHeader/FixHeader';
import ThemesToggle from './components/theme/ThemesToggle';
import About from './sections/about/About';
import Header from './sections/header/Header';
import LanguageFlags from './components/LanguageFlags';

import './App.css';

const Advantages = lazy(() => import('./sections/advantages/Advantages'));
const FormBlock = lazy(() => import('./sections/formBlock/FormBlock'));
const Technologies = lazy(() => import('./sections/technologies/Technologies'));

function App() {
	const headerRef = useRef<HTMLDivElement | null>(null);
	const menuRef = useRef<HTMLUListElement | null>(null);
	const aboutRef = useRef<HTMLDivElement | null>(null);
	const advantagesRef = useRef<HTMLDivElement | null>(null);
	const technologiesRef = useRef<HTMLDivElement | null>(null);
	const formRef = useRef<HTMLDivElement | null>(null);

	const [showHeader, setShowHeader] = useState<boolean>(false);
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
		<ThemeProvider>
			<div className="App">
				<Header key={'section-header'} ref={headerRef} />
				<About key={'section-about'} ref={aboutRef} />
				<Suspense fallback={null}>
					<Advantages key={'section-advantages'} ref={advantagesRef} />
				</Suspense>
				<Suspense fallback={null}>
					<Technologies key={'section-technologies'} ref={technologiesRef} />
				</Suspense>
				<Suspense fallback={null}>
					<FormBlock key={'section-form'} ref={formRef} />
				</Suspense>
				{!isMobile && (
					<>
						<FixHeader
							key={'header-fix'}
							showHeader={showHeader}
							ref={menuRef}
						/>
						<div className={'panelWrapper'}>
							<LanguageFlags key={'toggle-language'} />
							<ThemesToggle key={'toggle-theme'} />
						</div>
					</>
				)}
			</div>
		</ThemeProvider>
	);
}

export default App;
