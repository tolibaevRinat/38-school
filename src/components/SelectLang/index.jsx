import React from 'react'
import { useTranslation } from 'react-i18next' // Импортируем useTranslation

import i18n from '../../i18n'
import styles from './SelectLang.module.scss'
const SelectLang = () => {
	const { t } = useTranslation() // Получаем функцию t для перевода
	const [isTouchSelectButton, setIsTouchSelectButton] = React.useState(false)

	const changeLanguage = lng => {
		// Функция для изменения языка
		i18n.changeLanguage(lng)
		localStorage.setItem('language', JSON.stringify(lng)) // Сохраняем выбранный язык в localStorage
		setIsTouchSelectButton(false) // Закрываем список после выбора
	}

	return (
		<div
			onClick={() => setIsTouchSelectButton(!isTouchSelectButton)}
			className={`${styles.root} ${isTouchSelectButton ? styles.isActive : ''}`}
		>
			<button className={styles.button} type='button'>
				{t('Choose language')} {/* Переводим текст кнопки */}
			</button>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<button
						className={styles.listButton}
						type='button'
						onClick={() => changeLanguage('en')}
					>
						{t('english')} {/* Переводим названия языков */}
					</button>
				</li>
				<li className={styles.listItem}>
					<button
						className={styles.listButton}
						type='button'
						onClick={() => changeLanguage('ru')}
					>
						{t('russian')}
					</button>
				</li>
				<li className={styles.listItem}>
					<button
						className={styles.listButton}
						type='button'
						onClick={() => changeLanguage('uz')}
					>
						{t('uzbek')}
					</button>
				</li>
				<li className={styles.listItem}>
					<button
						className={styles.listButton}
						type='button'
						onClick={() => changeLanguage('qr')}
					>
						{t('qaraqalpaq')}
					</button>
				</li>
			</ul>
		</div>
	)
}

export default SelectLang
