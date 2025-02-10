import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import styles from './Header.module.scss'
import SelectLang from '../SelectLang'

const Header = () => {
	const { t, i18n } = useTranslation()

	const [isTouchMenuButton, setIsTouchMenuButton] = React.useState(false)

	const adminsItems = [
		{
			value: 'head teacher',
			path: `/schoolhead`,
		},
		{
			value: 'deputy headmaster',
			path: '/deputyheadmaster',
		},
		{
			value: 'psychologists',
			path: '/psychologists',
		},
	]

	const aboutSchool = [
		{
			value: 'School passport',
			path: '/schoolpassport',
		},
		{
			value: 'School Charter',
			path: '/schoolcharter',
		},
	]

	const symbols = {
		en: [
			{
				value: 'Coat of arms of Uzbekistan',
				url: 'https://en.wikipedia.org/wiki/Coat_of_arms_of_Uzbekistan',
			},
			{
				value: 'Flag of Uzbekistan',
				url: 'https://en.wikipedia.org/wiki/Flag_of_Uzbekistan',
			},
			{
				value: 'Anthem of Uzbekistan',
				url: 'https://en.wikipedia.org/wiki/National_anthem_of_Uzbekistan',
			},
			{
				value: 'Coat of arms of Karakalpakstan',
				url: 'https://en.wikipedia.org/wiki/Karakalpakstan',
			}, // No dedicated page, link to the region
			{
				value: 'Flag of Karakalpakstan',
				url: 'https://en.wikipedia.org/wiki/Karakalpakstan',
			}, // No dedicated page, link to the region
			{
				value: 'Anthem of Karakalpakstan',
				url: 'https://en.wikipedia.org/wiki/Karakalpakstan',
			}, // No dedicated page, link to the region
		],
		ru: [
			{
				value: 'Герб Узбекистана',
				url: 'https://ru.wikipedia.org/wiki/Герб_Узбекистана',
			},
			{
				value: 'Флаг Узбекистана',
				url: 'https://ru.wikipedia.org/wiki/Флаг_Узбекистана',
			},
			{
				value: 'Гимн Узбекистана',
				url: 'https://ru.wikipedia.org/wiki/Гимн_Узбекистана',
			},
			{
				value: 'Герб Каракалпакстана',
				url: 'https://ru.wikipedia.org/wiki/Герб_Каракалпакстана',
			},
			{
				value: 'Флаг Каракалпакстана',
				url: 'https://ru.wikipedia.org/wiki/Флаг_Каракалпакстана',
			},
			{
				value: 'Гимн Каракалпакстана',
				url: 'https://ru.wikipedia.org/wiki/Гимн_Каракалпакстана',
			},
		],
		uz: [
			// Example - you'll need to find the correct URLs
			{
				value: 'Oʻzbekiston gerbi',
				url: 'https://uz.wikipedia.org/wiki/Oʻzbekiston_gerbi',
			},
			{
				value: 'Oʻzbekiston bayrogʻi',
				url: 'https://uz.wikipedia.org/wiki/Oʻzbekiston_bayrogʻi',
			},
			{
				value: 'Oʻzbekiston madhiyasi',
				url: 'https://uz.wikipedia.org/wiki/Oʻzbekiston_madhiyasi',
			},
			{
				value: 'Qoraqalpogʻiston gerbi',
				url: 'https://uz.wikipedia.org/wiki/Qoraqalpogʻiston',
			}, // Find correct URLs
			{
				value: 'Qoraqalpogʻiston bayrogʻi',
				url: 'https://uz.wikipedia.org/wiki/Qoraqalpogʻiston',
			}, // Find correct URLs
			{
				value: 'Qoraqalpogʻiston madhiyasi',
				url: 'https://uz.wikipedia.org/wiki/Qoraqalpogʻiston',
			}, // Find correct URLs
		],
		qr: [
			{
				value: "O'zbekistan gerbi",
				url: 'https://uz.wikipedia.org/wiki/Qoraqalpogʻiston',
			}, // Find correct URLs
			{
				value: "O'zbekistan bayrag'i",
				url: 'https://uz.wikipedia.org/wiki/Qoraqalpogʻiston',
			}, // Find correct URLs
			{
				value: "O'zbekistan gimni",
				url: 'https://uz.wikipedia.org/wiki/Qoraqalpogʻiston',
			}, // Find correct URLs
			{
				value: 'Qaraqalpaqistan gerbi',
				url: 'https://uz.wikipedia.org/wiki/Qoraqalpogʻiston',
			}, // Find correct URLs
			{
				value: "Qaraqalpaqistan bayrag'i",
				url: 'https://uz.wikipedia.org/wiki/Qoraqalpogʻiston',
			}, // Find correct URLs
			{
				value: 'Qaraqalpaqistan gimni',
				url: 'https://uz.wikipedia.org/wiki/Qoraqalpogʻiston',
			}, // Find correct URLs
		],
	}

	const currentLanguage = i18n.language.split('-')[0]

	const symbolsToDisplay = symbols[currentLanguage] || symbols['en']

	return (
		<header className={styles.root}>
			<div className={`${styles.inner} container`}>
				<Link className={styles.logo} to='/'>
					<img src='/icons/logo.png' alt='logo' />
				</Link>
				<nav
					className={`${styles.nav} ${
						isTouchMenuButton ? styles.isActive : ''
					}`}
				>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<button className={styles.dropdownButton} type='button'>
								{t('Administration')}
							</button>
							<ul className={styles.subList}>
								{adminsItems.map((obj, i) => (
									<li key={i} className={styles.subListItem}>
										<Link className={styles.subListLink} to={obj.path}>
											{t(obj.value)}
										</Link>
									</li>
								))}
							</ul>
						</li>
						<li className={styles.listItem}>
							<button className={styles.dropdownButton} type='button'>
								{t('About school')}
							</button>
							<ul className={styles.subList}>
								{aboutSchool.map((obj, i) => (
									<li key={i} className={styles.subListItem}>
										<Link className={styles.subListLink} to={obj.path}>
											{t(obj.value)}
										</Link>
									</li>
								))}
							</ul>
						</li>
						<li className={styles.listItem}>
							<button className={styles.dropdownButton} type='button'>
								{t('Symbolism')}
							</button>
							<ul className={styles.subList}>
								{symbolsToDisplay.map((obj, i) => (
									<li key={i} className={styles.subListItem}>
										<a
											className={styles.link}
											href={obj.url}
											target='_blank'
											rel='noopener noreferrer'
										>
											{t(obj.value)}
										</a>
									</li>
								))}
							</ul>
						</li>
						<li className={styles.listItem}>
							<Link className={styles.button} to='/address'>
								{t('Address')}
							</Link>
						</li>
					</ul>
				</nav>
				<SelectLang />
				<button
					onClick={() => setIsTouchMenuButton(!isTouchMenuButton)}
					className={`${styles.burgerButton} ${
						isTouchMenuButton ? styles.isActive : ''
					}`}
					type='button'
				>
					{[...new Array(3)].map((_, i) => (
						<span key={i} className={styles.line}></span>
					))}
				</button>
			</div>
		</header>
	)
}

export default Header
