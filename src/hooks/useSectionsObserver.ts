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
				const idx = menuTitles.indexOf(entry.target.id);

				if (idx !== -1) {
					const isIntersect =
						entry.intersectionRatio >=
						((Array.isArray(options?.threshold)
							? options?.threshold[idx]
							: options?.threshold) || 0);

					(controlRef.current?.children[idx] as HTMLElement).style.color =
						isIntersect ? '#950000' : 'white';

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
	}, [controlRef, options, sectionsRefs]);
};

export default useSectionsObserver;
