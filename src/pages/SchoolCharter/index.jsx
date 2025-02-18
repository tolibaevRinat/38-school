import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './SchoolCharter.module.scss'

const SchoolCharter = () => {
	const { t } = useTranslation()

	return (
		<section className={styles.root}>
			<h1 className={`${styles.title} title`}>{t('charter.title')}</h1>
			<embed
				className={styles.pdf}
				src='/files/Ustav.pdf'
				type='application/pdf'
			></embed>
		</section>
	)
}

export default SchoolCharter
