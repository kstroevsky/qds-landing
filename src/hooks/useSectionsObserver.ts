import { useEffect } from 'react';
import { ENavigationTitles } from '../shared/constants';
import type { MutableRefObject } from 'react';

const useSectionsObserver = (
	controlRef: MutableRefObject<HTMLElement | null>,
	isMobile: boolean,
	options?: IntersectionObserverInit,
	...sectionsRefs: MutableRefObject<HTMLElement | null>[]
) => {
	useEffect(() => {
		const menuItems = Array.from(controlRef.current?.children || []);
		const menuTitles: (string | undefined)[] = isMobile
			? Object.values(ENavigationTitles)
			: menuItems.map((el) => (el as HTMLElement).dataset.section);

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const idx = menuTitles.indexOf(entry.target.id);

				if (idx !== -1) {
					const isIntersect =
						entry.intersectionRatio >=
						((Array.isArray(options?.threshold)
							? options?.threshold[idx]
							: options?.threshold) || 0);

					if (!isMobile) {
						(
							controlRef.current?.children[idx] as HTMLElement
						).style.color = `var(--main${isIntersect ? 'Hover' : 'Color'})`;
					}

					if (!entry.target.classList.contains('is-visible')) {
						isIntersect && entry.target.classList.add('is-visible');
					}
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
	}, [controlRef, options, sectionsRefs, isMobile]);
};

export default useSectionsObserver;
