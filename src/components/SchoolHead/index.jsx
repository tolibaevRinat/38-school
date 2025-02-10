import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './SchoolHead.module.scss'

const SchoolHead = () => {
	const { t } = useTranslation()

	return (
		<section className={`${styles.inner} container`}>
			<h1 className={`${styles.title} circle`}>
				{t('Director of school No. 38')}
			</h1>
			<div className={styles.deputy}>
				<div className={styles.img}>
					<img
						src='/images/admins/head.jpg'
						alt='school Head'
						width={1000}
						height={1000}
					/>
				</div>
				<p className={styles.name}>{t('Qutibaeva Zulfiya Qalbaevna')}</p>
			</div>
		</section>
	)
}

export default SchoolHead
