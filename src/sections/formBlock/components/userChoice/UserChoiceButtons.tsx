import React, {useState} from "react";

import s from "./UserChoice.module.scss";

interface UserChoiceButtonsProps {
    title: string;
}
const UserChoiceButtons = ({title} : UserChoiceButtonsProps) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsActive(!isActive);
    };

    return (
        <button className={`${s.userChoice__buttons} ${isActive ? s.active : ''}`} onClick={(e) =>handleClick(e)}>{title}</button>
    );
};

export default UserChoiceButtons;