import s from './BannerBlock.module.scss';

function BannerBlock() {
	const navArray = ['ABOUT', 'ADVANTAGES', 'TECHNOLOGIES', 'CONTACTS'];

	return (
		// <div className={s.background}>
		// 	<div className={s.leftBlock}>
		// 		<div className={s.info}>
		// 			<h1 className={s.title}>QTS SOFTWARE</h1>
		// 			<button className={s.button}><a href="">CONTACT US</a></button>
		// 		</div>
		// 	</div>
		// 	<div className={s.rightBlock}>
		// 		<nav className={s.nav}>
		// 			<ul className={s.menu}>
		// 				{navArray.map(el =>
		// 					<li className={s.menu__item} key={el}><a href="">{el}</a></li>
		// 				)}
		// 			</ul>
		// 		</nav>
		// 	</div>
		// </div>
		<>
			<div className={s.backgroundContainer}>
				<div className={s.mainBackground}>
					<div className={s.leftBackground}></div>
					<div className={s.rightBackground}></div>
				</div>
			</div>
		</>
	);
}

export default BannerBlock;
