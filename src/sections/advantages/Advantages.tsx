import { forwardRef, memo } from 'react';
import classnames from 'classnames';
import useIsMobile from '../../hooks/useIsMobile';
import { ENavigationTitles } from '../../shared/constants';
import AdvantagesList from '../../components/AdvantagesList';
import {useTranslation} from "react-i18next";

import s from './Advantages.module.scss';

const Advantages = forwardRef<HTMLDivElement>((_, ref) => {
	const isMobile = useIsMobile();
	const {t} = useTranslation()

	return (
		<div className={s.block} id={ENavigationTitles.ADVANTAGES} ref={ref}>
			<div>
				<div className={classnames(s.titleList)}>
					<h2 className={`${s.titleList__item} ${s.titleList__item_first}`}>
						{t('advantages.speed')}
					</h2>
					<h2 className={`${s.titleList__item} ${s.titleList__item_second}`}>
						{t('advantages.increase')}
					</h2>
					<h2 className={`${s.titleList__item} ${s.titleList__item_third}`}>
						{t('advantages.cost')}
					</h2>
				</div>
				<h1 className={s.titleBottom}>{t('advantages.we_do')}</h1>
				<div className={s.bottom}></div>
			</div>
			<AdvantagesList />
			{!isMobile && <div className={classnames(s.background)} />}
		</div>
	);
});

export default memo(Advantages);
