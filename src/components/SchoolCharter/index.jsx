import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './SchoolCharter.module.scss'

const SchoolCharter = () => {
	const { t } = useTranslation()

	return (
		<section className={`${styles.inner} container`}>
			<h1 className={`${styles.title} circle`}>
				{t('Charter of school No. 38')}
			</h1>
			<div className={styles.deputy}>
				<div className={styles.img}>
					<embed
						className={styles.pdf}
						src='/files/Ustav.pdf'
						type='application/pdf'
					/>
				</div>
			</div>
		</section>
	)
}

export default SchoolCharter
