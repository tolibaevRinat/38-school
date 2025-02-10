import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './SchoolPassport.module.scss'

const SchoolPassport = () => {
	const { t } = useTranslation()

	return (
		<section className={`${styles.inner} container`}>
			<h1 className={`${styles.title} circle`}>
				{t('School passport No. 38"')}
			</h1>
			<div className={styles.deputy}>
				<div className={styles.img}>
					<embed
						className={styles.pdf}
						src='/files/schoolPass.pdf'
						type='application/pdf'
					/>
				</div>
			</div>
		</section>
	)
}

export default SchoolPassport
