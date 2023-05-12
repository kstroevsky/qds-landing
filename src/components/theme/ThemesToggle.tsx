import { memo, useCallback } from 'react';
import classnames from 'classnames';
import type { FC } from 'react';

import useTheme from '../../hooks/useTheme';
import { EThemes } from '../../shared/constants';

import s from './ThemesToggle.module.scss';

const ThemesToggle: FC = () => {
	const { theme, setTheme } = useTheme();

	console.log(theme)

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

export default memo(ThemesToggle);
