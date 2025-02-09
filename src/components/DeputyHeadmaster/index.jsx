import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './DeputyHeadmaster.module.scss'

const DeputyHeadmaster = () => {
	const { t } = useTranslation()
	return (
		<section className={`${styles.inner} container`}>
			<h1 className={`${styles.title} circle`}>{t('deputies')}</h1>
			<div className={styles.deputy}>
				<div className={styles.img}>
					<img src='/images/admins/Dilaram.jpg' alt='deputy director Dilaram' />
				</div>
				<p className={styles.name}>
					{t('Deputy Director for Academic Affairs')}
					{': '}
					<span>{t('Palvanova Diloram Abdukhalimovna')}</span>
				</p>
			</div>
			<div className={styles.deputy}>
				<div className={styles.img}>
					<img src='/images/admins/Sholpan.jpg' alt='deputy director Sholpan' />
				</div>
				<p className={styles.name}>
					{t('Deputy Director for Academic Affairs')}
					{': '}
					<span>{t('Abdieva Sholpan Tlepbaevna')}</span>
				</p>
			</div>
			<div className={styles.deputy}>
				<div className={styles.img}>
					<img
						src='/images/admins/Guljamila.jpg'
						alt='deputy director Guljamila'
					/>
				</div>
				<p className={styles.name}>
					{t('Deputy Director for Spiritual and Educational Work')}
					{': '}
					<span>{t('Sitimbetova Gulzhamila Amanbaevna')}</span>
				</p>
			</div>
			<div className={styles.deputy}>
				<div className={styles.img}>
					<img
						src='/images/admins/Toremurat.jpg'
						alt='deputy director Toremurat'
					/>
				</div>
				<p className={styles.name}>
					{t('Deputy Director for Spiritual and Moral Work')}
					{': '}
					<span>{t('Allekeev Toremurat Zhangabaevich')}</span>
				</p>
			</div>
		</section>
	)
}

export default DeputyHeadmaster
