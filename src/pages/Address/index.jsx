import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Address.module.scss'

const Address = () => {
	const { t } = useTranslation()

	return (
		<section className={styles.root}>
			<h1 className={`${styles.title} title`}>{t('addressComponent.title')}</h1>
			<iframe
				className={styles.map}
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.560970687734!2d59.62253317671383!3d42.43707903023131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9116eb1dfa5f%3A0xb7180afd692d2d24!2z0J7QsdGJ0LXQvtCx0YDQsNC30L7QstCw0YLQtdC70YzQvdCw0Y8g0YjQutC-0LvQsCDihJYzOCDQs9C-0YDQvtC00LAg0J3Rg9C60YPRgdCw!5e0!3m2!1sru!2s!4v1739814903480!5m2!1sru!2s'
				width='600'
				height='450'
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</section>
	)
}

export default Address
