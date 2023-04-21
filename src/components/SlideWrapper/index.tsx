import { memo } from 'react';
import type { FC } from 'react';

interface SlideWrapperProps {
	style: React.CSSProperties;
	isSelected: boolean;
	isMobile: boolean;
	children: React.ReactNode;
}

const SlideWrapper: FC<SlideWrapperProps> = ({
	style,
	isSelected,
	isMobile,
	children,
}) => (
	<div
		style={{
			...style,
			...(isSelected && !isMobile
				? {
						paddingBottom: '30px',
						borderBottom: '10px solid #a171e9',
						width: '90%',
						margin: '0 auto',
						borderRadius: '6px',
				  }
				: {}),
		}}
	>
		{children}
	</div>
);

export default memo(SlideWrapper);
