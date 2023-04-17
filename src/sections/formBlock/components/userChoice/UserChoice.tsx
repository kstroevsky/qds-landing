import UserChoiceButtons from './UserChoiceButtons';
import { formOptions } from '../../../../shared/constants';

import s from './UserChoice.module.scss';

const UserChoice = () => (
	<div className={s.userChoice}>
		{formOptions.map((el) => (
			<UserChoiceButtons key={el} title={el} />
		))}
	</div>
);

export default UserChoice;
