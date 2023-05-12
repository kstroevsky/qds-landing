import { useState, memo, useCallback } from 'react';
import classNames from 'classnames';
import type { FC, MouseEvent } from 'react';

import s from './UserChoiceButtons.module.scss';

interface UserChoiceButtonsProps {
	title: string;
}

const UserChoiceButtons: FC<UserChoiceButtonsProps> = ({ title }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsActive((prev) => !prev);
	}, []);

	return (
		<button
			className={classNames(s.wrapper, { [s.active]: isActive })}
			onClick={(e) => handleClick(e)}
		>
			{title}
		</button>
	);
};

export default memo(UserChoiceButtons);
