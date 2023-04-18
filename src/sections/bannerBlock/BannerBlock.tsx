import s from './BannerBlock.module.scss';
import {useState} from "react";

function BannerBlock() {
	const [activeBurger, setActiveBurger] = useState(false);

	const navArray = ['ABOUT', 'ADVANTAGES', 'TECHNOLOGIES', 'CONTACTS'];

	return (
		<div className={s.bannerWrapper}>
			{!activeBurger && <div className={s.info}>
				<h1 className={s.title}>QTS SOFTWARE</h1>
				<button className={s.button}><a href="">CONTACT US</a></button>
			</div>}
			<nav className={`${s.nav} ${activeBurger && s.nav_mobile}`}>
				<ul className={`${s.menu} ${activeBurger && s.menu_mobile}`}>
					{navArray.map(el =>
						<li className={`${s.menu__item} ${activeBurger && s.menu_mobile__item}`} key={el}><a href="">{el}</a></li>
					)}
				</ul>
			</nav>
			<div className={s.backgroundContainer}>
				<div className={s.mainBackground}>
					<div className={s.leftBackground}></div>
					{!activeBurger && <div className={s.rightBackground}></div>}
				</div>
			</div>

			<div className={`${s.burger} ${activeBurger && s.burger_active}`} onClick={() => setActiveBurger(!activeBurger)}>
				<span className={s.line}></span>
			</div>
		</div>
	);
}

export default BannerBlock;
