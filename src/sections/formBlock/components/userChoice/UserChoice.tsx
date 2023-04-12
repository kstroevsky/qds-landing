import UserChoiceButtons from "./UserChoiceButtons"

import s from "./UserChoice.module.scss";

const UserChoice = () => {
    const items = ['UI/UX design', 'Frontend', 'Graphic design', 'Devops', 'Architecture']

    return (
        <div className={s.userChoice}>
            {items.map(el =>
                <UserChoiceButtons title={el}/>
            )}
        </div>
    );
};

export default UserChoice;