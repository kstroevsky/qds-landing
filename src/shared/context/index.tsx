import { createContext, memo } from 'react';
import type { FC, ReactNode } from 'react';

import { EThemes } from '../constants';
import useTheme from '../../hooks/useTheme';

interface ThemeContextType {
	theme: EThemes;
}

interface ThemeProviderProps {
	children: ReactNode;
}

export const Context = createContext<ThemeContextType>({
	theme: EThemes.DARK,
});

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const { theme } = useTheme();

	return <Context.Provider value={{ theme }}>{children}</Context.Provider>;
};

export default memo(ThemeProvider);
