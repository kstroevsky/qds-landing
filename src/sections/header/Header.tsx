import {
	Suspense,
	forwardRef,
	lazy,
	memo,
	useCallback,
	useEffect,
	useState,
} from 'react';

import useIsMobile from '../../hooks/useIsMobile';

import s from './header.module.scss';

const HeaderNav = lazy(() => import('../../components/HeaderNav'));
const HeaderInfo = lazy(() => import('../../components/HeaderInfo'));
const ThemesToggle = lazy(() => import('../../components/theme/ThemesToggle'));
const HeaderBackground = lazy(
	() => import('../../components/HeaderBackground')
);

const Header = forwardRef<HTMLDivElement>((_, ref) => {
	const isMobile = useIsMobile();
	const [activeBurger, setActiveBurger] = useState<boolean>(false);

	const handleBurgerClick = useCallback(() => {
		setActiveBurger((prev) => !prev);
	}, []);

	useEffect(() => {
		if (!isMobile) {
			setActiveBurger(false);
		}
	}, [isMobile]);

	useEffect(() => {
		document.body.style.overflowY = activeBurger ? 'hidden' : 'auto';
	}, [activeBurger]);

	return (
		<Suspense>
			<div className={s.bannerWrapper} ref={ref}>
				<HeaderNav
					activeBurger={activeBurger}
					onBurgerClick={handleBurgerClick}
				/>
				{!activeBurger && <HeaderInfo />}
				<HeaderBackground activeBurger={activeBurger} />
				{isMobile && activeBurger && <ThemesToggle />}
			</div>
		</Suspense>
	);
});

export default memo(Header);
