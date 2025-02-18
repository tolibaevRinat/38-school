import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './SchoolPassport.module.scss'

const SchoolPassport = () => {
	const { t } = useTranslation()

	return (
		<section className={styles.root}>
			<h1 className={`${styles.title} title`}>{t('password.title')}</h1>
			<embed
				className={styles.pdf}
				src='/files/schoolPass.pdf'
				type='application/pdf'
			></embed>
		</section>
	)
}

export default SchoolPassport
