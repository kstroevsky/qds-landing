import { FC, useCallback } from 'react';
import { EThemes, useTheme } from '../../hooks/UseTheme';
import classnames from 'classnames';

import s from './ThemesToggle.module.scss';

const ThemesToggle: FC = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = useCallback(
		() => setTheme(theme === EThemes.DARK ? EThemes.LIGHT : EThemes.DARK),
		[setTheme, theme]
	);

	return (
		<div
			className={classnames(s.theme, {
				[s.light_checked]: theme === EThemes.LIGHT,
			})}
			onClick={toggleTheme}
		>
			<div className={s.line}></div>
			<div className={s.dark}></div>
			<div className={s.light}></div>
		</div>
	);
};

export default ThemesToggle;
