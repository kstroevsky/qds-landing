import first from '../../assets/block3/first.png';
import second from '../../assets/block3/second.png';
import third from '../../assets/block3/third.png';

import s from './Block3.module.scss';
import { useState } from 'react';

const Block3 = () => {
	const [backgroundImage, setBackgroundImage] = useState('');

	const handleMouseEnter = (image: string) => {
		setBackgroundImage(image);
	};

	const handleMouseLeave = () => {
		setBackgroundImage('');
	};

	return (
		// <div className={s.block}>
		//     <div className={`${s.section} ${s.section_first}`}>
		//         <img className={s.section__right} src={first} alt="img"/>
		//     </div>
		//     <div className={`${s.section} ${s.section_second}`}>
		//         <img className={s.section__left} src={second} alt="img"/>
		//     </div>
		//     <div className={`${s.section} ${s.section_third}`}>
		//         <img className={s.section__right} src={third} alt="img"/>
		//     </div>
		// </div>
		<div className={s.block}>
			<div
				className={s.background}
				style={{
					transition: 'backgroundImage 0.4s ease',
					backgroundImage: `url(${backgroundImage})`,
				}}
			></div>
			<div
				className={`${s.section} ${s.section_first}`}
				onMouseEnter={() => handleMouseEnter(first)}
				onMouseLeave={handleMouseLeave}
			>
				<img className={s.section__right} src={first} alt="img" />
			</div>
			<div
				className={`${s.section} ${s.section_second}`}
				onMouseEnter={() => handleMouseEnter(second)}
				onMouseLeave={handleMouseLeave}
			>
				<img className={s.section__left} src={second} alt="img" />
			</div>
			<div
				className={`${s.section} ${s.section_third}`}
				onMouseEnter={() => handleMouseEnter(third)}
				onMouseLeave={handleMouseLeave}
			>
				<img className={s.section__right} src={third} alt="img" />
			</div>
		</div>
	);
};

export default Block3;
