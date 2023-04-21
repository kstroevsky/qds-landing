import { useEffect } from 'react';
import type { MutableRefObject } from 'react';

const useSectionsObserver = (
	controlRef: MutableRefObject<HTMLElement | null>,
	options?: IntersectionObserverInit,
	...sectionsRefs: MutableRefObject<HTMLElement | null>[]
) => {
	useEffect(() => {
		const menuItems = Array.from(controlRef.current?.children || []);
		const menuTitles: (string | undefined)[] = menuItems.map(
			(el) => (el as HTMLElement).dataset.section
		);

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const idx = menuTitles.findIndex((el) => entry.target.id === el);

				if (idx !== -1) {
					(controlRef.current?.children[idx] as HTMLElement).style.color =
						entry.isIntersecting ? '#950000' : 'white';
				}
			});
		}, options);

		sectionsRefs.forEach((ref) => {
			ref.current && observer.observe(ref.current);
		});

		return () => {
			sectionsRefs.forEach((ref) => {
				ref.current && observer.unobserve(ref.current);
			});
		};
	}, [sectionsRefs, controlRef, options]);
};

export default useSectionsObserver;
