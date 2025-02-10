import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Psychologist.module.scss'

const Psychologist = () => {
	const { t } = useTranslation()
	return (
		<section className={`${styles.inner} container`}>
			<h1 className={`${styles.title} circle`}>
				{t('Psychologist at school No. 38')}
			</h1>
			<div className={styles.deputy}>
				<div className={styles.img}>
					<img src='/images/admins/muhaddas.jpg' alt='Psychologist Muhaddas' />
				</div>
				<p className={styles.name}>{t('Ametova Muhaddas Saparbaevna')}</p>
			</div>
			<div className={styles.deputy}>
				<div className={styles.img}>
					<img src='/images/admins/muhaddas.jpg' alt='Psychologist Muhaddas' />
				</div>
				<p className={styles.name}>{t('Abdrazakova Gulzar Sadirbaevna')}</p>
			</div>
		</section>
	)
}

export default Psychologist
