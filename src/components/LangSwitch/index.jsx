import React from 'react'
import { Dropdown } from 'rsuite'
import { useTranslation } from 'react-i18next'

import i18n from '../../i18n'
import styles from './LangSwitch.module.scss'

const LangSwitch = () => {
	const { t } = useTranslation()

	const changeLanguage = lng => {
		i18n.changeLanguage(lng) // Используем i18n.changeLanguage()
		localStorage.setItem('language', lng) // Сохраняем в localStorage
	}

	return (
		<Dropdown
			className={styles.langDropdown}
			title={t('selectLan.select')}
			trigger='hover'
		>
			<Dropdown.Item>
				<button
					onClick={() => changeLanguage('en')}
					className={styles.langBtn}
					type='button'
				>
					{t('selectLan.en')}
				</button>
			</Dropdown.Item>
			<Dropdown.Item>
				<button
					onClick={() => changeLanguage('ru')}
					className={styles.langBtn}
					type='button'
				>
					{t('selectLan.ru')}
				</button>
			</Dropdown.Item>
			<Dropdown.Item>
				<button
					onClick={() => changeLanguage('uz')}
					className={styles.langBtn}
					type='button'
				>
					{t('selectLan.uz')}
				</button>
			</Dropdown.Item>
			<Dropdown.Item>
				<button
					onClick={() => changeLanguage('qr')}
					className={styles.langBtn}
					type='button'
				>
					{t('selectLan.qr')}
				</button>
			</Dropdown.Item>
		</Dropdown>
	)
}

export default LangSwitch
