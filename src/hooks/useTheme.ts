import { useLayoutEffect, useState } from 'react';
import { EThemes } from '../shared/constants';

const useTheme = () => {
	const isDarkTheme = window?.matchMedia(
		'(prefers-color-scheme: dark)'
	).matches;
	const [theme, setTheme] = useState<EThemes>(
		localStorage.getItem('app-theme') || isDarkTheme
			? EThemes.DARK
			: EThemes.LIGHT
	);

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	return { theme, setTheme };
};

export default useTheme;
