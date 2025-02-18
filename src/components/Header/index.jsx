import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'rsuite'
import { useTranslation } from 'react-i18next'

import styles from './Header.module.scss'
import LangSwitch from '../LangSwitch'

const Header = () => {
	const [onClickMenuIcon, setOnClickMenuIcon] = React.useState(0)
	const { t } = useTranslation()

	const handleMenuClick = () => {
		setOnClickMenuIcon(!onClickMenuIcon)
		document.documentElement.classList.toggle('is-lock', !onClickMenuIcon)
	}

	return (
		<header className={styles.root}>
			<div className={`${styles.inner} container`}>
				<Link className={styles.logo} to='/'>
					<img src='/icons/logo.png' alt='logo' />
				</Link>
				<nav
					className={`${styles.nav} ${onClickMenuIcon ? styles._active : ''}`}
				>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<Dropdown
								className={styles.dropdown}
								title={t('admins.administration')}
								trigger='hover'
							>
								<Dropdown.Item>
									<Link to='/director'>{t('admins.director')}</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to='/deputy'>{t('admins.deputy')}</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to='/psychologist'>{t('admins.psychologist')}</Link>
								</Dropdown.Item>
							</Dropdown>
						</li>
						<li className={styles.listItem}>
							<Dropdown
								className={styles.dropdown}
								title={t('about.school')}
								trigger='hover'
							>
								<Dropdown.Item>
									<Link to='/events'>{t('about.events')}</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to='/school-passport'>{t('about.passport')}</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to='/school-charter'>{t('about.charter')}</Link>
								</Dropdown.Item>
							</Dropdown>
						</li>
						<li className={styles.listItem}>
							<Dropdown
								className={styles.dropdown}
								title={t('symbols.trans')}
								trigger='hover'
							>
								<Dropdown.Item>
									<a
										href='https://ru.wikipedia.org/wiki/Герб_Узбекистана'
										target='_blank'
										rel='noopener noreferrer'
									>
										{t('symbols.coatUz')}
									</a>
								</Dropdown.Item>
								<Dropdown.Item>
									<a
										href='https://ru.wikipedia.org/wiki/Флаг_Узбекистана'
										target='_blank'
										rel='noopener noreferrer'
									>
										{t('symbols.flagUz')}
									</a>
								</Dropdown.Item>
								<Dropdown.Item>
									<a
										href='https://ru.wikipedia.org/wiki/Гимн_Узбекистана'
										target='_blank'
										rel='noopener noreferrer'
									>
										{t('symbols.anthemUz')}
									</a>
								</Dropdown.Item>
								<Dropdown.Item>
									<a
										href='https://ru.wikipedia.org/wiki/Герб_Каракалпакстана'
										target='_blank'
										rel='noopener noreferrer'
									>
										{t('symbols.coatQr')}
									</a>
								</Dropdown.Item>
								<Dropdown.Item>
									<a
										href='https://ru.wikipedia.org/wiki/Флаг_Каракалпакстана'
										target='_blank'
										rel='noopener noreferrer'
									>
										{t('symbols.flagQr')}
									</a>
								</Dropdown.Item>
								<Dropdown.Item>
									<a
										href='https://ru.wikipedia.org/wiki/Гимн_Каракалпакстана'
										target='_blank'
										rel='noopener noreferrer'
									>
										{t('symbols.anthemQr')}
									</a>
								</Dropdown.Item>
							</Dropdown>
						</li>
						<li className={styles.listItem}>
							<Link className={styles.address} to='/address'>
								{t('address')}
							</Link>
						</li>
					</ul>
				</nav>
				<LangSwitch />
				<button
					onClick={handleMenuClick}
					className={`${styles.menuButton} ${
						onClickMenuIcon ? styles._active : ''
					}`}
					type='button'
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</header>
	)
}

export default Header
