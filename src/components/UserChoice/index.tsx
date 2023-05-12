import { memo } from 'react';
import type { FC } from 'react';

import { formOptions } from '../../shared/constants';
import UserChoiceButtons from '../UserChoiceButtons';

import s from './UserChoice.module.scss';

const UserChoice: FC = () => (
	<div className={s.userChoice}>
		{formOptions.map((el) => (
			<UserChoiceButtons key={el} title={el} />
		))}
	</div>
);

export default memo(UserChoice);
