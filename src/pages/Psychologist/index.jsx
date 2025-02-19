import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Psychologist.module.scss'
import Employees from '../../components/Employees'

const Psychologist = () => {
	const { t } = useTranslation()

	return (
		<section className={styles.root}>
			<h1 className={`${styles.title} title`}>{t('psychologist.title')}</h1>
			<Employees
				img='images/admins/muhaddas.jpg'
				title={t('psychologist.name_1')}
			/>
			<Employees
				img='images/admins/Gulzar.jpg'
				title={t('psychologist.name_2')}
			/>
		</section>
	)
}

export default Psychologist
