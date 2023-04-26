import { useCallback, useRef, useState } from 'react';

import useIsMobile from './hooks/useIsMobile';
import useScrollObserver from './hooks/useScrollObserver';
import useSectionsObserver from './hooks/useSectionsObserver';
import { headerObserverOptions, menuObserverOptions } from './shared/constants';
import TranslationProvider from './shared/context';

import FixHeader from './components/fixHeader/FixHeader';
import ThemesToggle from './components/theme/ThemesToggle';
import About from './sections/about/About';
import Advantages from './sections/advantages/Advantages';
import FormBlock from './sections/formBlock/FormBlock';
import Header from './sections/header/Header';
import Technologies from './sections/technologies/Technologies';
import LanguageFlags from './components/LanguageFlags/LanguageFlags';

import './App.css';

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
		<TranslationProvider>
			<div className="App">
				<Header key={'section-header'} ref={headerRef} />
				<About key={'section-about'} ref={aboutRef} />
				<Advantages key={'section-advantages'} ref={advantagesRef} />
				<Technologies key={'section-technologies'} ref={technologiesRef} />
				<FormBlock key={'section-form'} ref={formRef} />
				{!isMobile && (
					<>
						<FixHeader
							key={'header-fix'}
							showHeader={showHeader}
							ref={menuRef}
						/>
						<LanguageFlags key={'toggle-language'} />
						<ThemesToggle key={'toggle-theme'} />
					</>
				)}
			</div>
		</TranslationProvider>
	);
}

export default App;
