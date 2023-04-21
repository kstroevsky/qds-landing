import { useCallback, useEffect, useState } from 'react';

export const useIsMobile = (): boolean => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleResize = useCallback(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	return windowWidth <= 1280;
};
