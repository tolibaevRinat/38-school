import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Deputy.module.scss'
import Employees from '../../components/Employees'

const Deputy = () => {
	const { t } = useTranslation()

	return (
		<section className={styles.root}>
			<h1 className={`${styles.title} title`}>
				{t('deputy.title')}
				Заместители директора школы №38
			</h1>
			<Employees img='/images/admins/Dilaram.jpg' title={t('deputy.name_1')} />
			<Employees
				img='/images/admins/Guljamila.jpg'
				title={t('deputy.name_2')}
			/>
			<Employees img='/images/admins/Sholpan.jpg' title={t('deputy.name_3')} />
			<Employees
				img='/images/admins/Toremurat.jpg'
				title={t('deputy.name_4')}
			/>
		</section>
	)
}

export default Deputy
