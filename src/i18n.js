import en from './translate/en.json'
import ru from './translate/ru.json'
import uz from './translate/uz.json'
import qr from './translate/qr.json'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
	en: {
		translation: en,
	},
	ru: {
		translation: ru,
	},
	uz: {
		translation: uz,
	},
	qr: {
		translation: qr,
	},
}

i18n
	.use(LanguageDetector) // Подключаем LanguageDetector
	.use(initReactI18next)
	.init({
		resources,
		lng: localStorage.getItem('language') || 'en', // Устанавливаем язык из localStorage или 'en' по умолчанию
		fallbackLng: 'en',
		interpolation: {
			// Предотвращаем двойное экранирование HTML-тегов
			escapeValue: false, // React уже экранирует значения
		},
	})

export default i18n
