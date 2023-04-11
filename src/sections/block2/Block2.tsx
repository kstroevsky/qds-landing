import s from "./Block2.module.scss"

function Block2 () {

	return (
		<div className={s.wrapper}>
			<div className={s.blockTwo}>
				<div className={s.top}>
					<h1 className={s.titleTop}>WHO WE ARE</h1>
				</div>
				<div className={s.bottom}>
					<div className={s.titleList}>
						<h2 className={`${s.titleList__item} ${s.titleList__item_first}`}>SPEED UP DEVELOPMENT</h2>
						<h2 className={`${s.titleList__item} ${s.titleList__item_second}`}>INCREASE QUALITY</h2>
						<h2 className={`${s.titleList__item} ${s.titleList__item_third}`}>REDUCE COSTS</h2>
					</div>
					<h1 className={s.titleBottom}>WHAT WE DO</h1>
				</div>
			</div>
		</div>

	);
}

export default Block2 ;