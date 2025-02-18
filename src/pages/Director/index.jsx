import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Director.module.scss'
import Employees from '../../components/Employees'

const Director = () => {
	const { t } = useTranslation()
	return (
		<section className={styles.root}>
			<h1 className={`${styles.title} title`}>{t('director.title')}</h1>
			<Employees img='/images/admins/head.jpg' title={t('director.name')} />
		</section>
	)
}

export default Director
