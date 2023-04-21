import { useLayoutEffect, useState } from 'react';

export enum EThemes {
	DARK = 'dark',
	LIGHT = 'light',
}

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;

export const useTheme = () => {
	const [theme, setTheme] = useState(
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
