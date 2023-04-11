import leftImg from "../../assets/bannerBlock/leftsSde.png";
import rightImg from "../../assets/bannerBlock/rightSide.png";

import s from "./BannerBlock.module.scss";

function BannerBlock() {
	const navArray = ['ABOUT', 'ADVANTAGES', 'TECHNOLOGIES', 'CONTACTS'];

	return (
	<div className={s.background}>
		<div className={s.bgImages}>
			<img src={leftImg} alt="" />
			<img className={s.rightImg} src={rightImg} alt="" />
		</div>
		<div className={s.lefttBlock}>
			<h1 className={s.title}>QTS SOFTWARE</h1>
			<button className={s.button}>CONTACT US</button>
		</div>
		<nav className={s.nav}>
			<ul className={s.menu}>
				{navArray.map(el =>
					<li className={s.menu__item} key={el}>{el}</li>	
				)}
			</ul>
		</nav>
	</div>
	);
}

export default BannerBlock;
