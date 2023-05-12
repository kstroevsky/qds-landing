import { useEffect } from 'react';
import type { MutableRefObject } from 'react';

const useScrollObserver = (
	isMobile: boolean,
	controlRef: MutableRefObject<HTMLElement | null>,
	callback: (value: boolean) => void,
	options?: IntersectionObserverInit
) => {
	useEffect(() => {
		if (!isMobile && controlRef.current) {
			const observer = new IntersectionObserver(
				(entries) => callback(!entries[0].isIntersecting),
				options
			);

			observer.observe(controlRef.current);

			return () => {
				controlRef.current && observer?.unobserve(controlRef.current);
			};
		}
	}, [isMobile, controlRef, options, callback]);
};

export default useScrollObserver;
