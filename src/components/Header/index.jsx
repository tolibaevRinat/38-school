import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'rsuite'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.root}>
			<div className={`${styles.inner} container`}>
				<Link className={styles.logo} to='/'>
					<img src='/icons/logo.png' alt='logo' />
				</Link>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<Dropdown
								className={styles.dropdown}
								title='Администрация'
								trigger='hover'
							>
								<Dropdown.Item>
									<Link to='/'>Директор школы</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to='/'>Зам. директора школы</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to='/'>Психологи</Link>
								</Dropdown.Item>
							</Dropdown>
						</li>
						<li className={styles.listItem}>
							<Dropdown
								className={styles.dropdown}
								title='О школе'
								trigger='hover'
							>
								<Dropdown.Item>
									<Link to='/'>Мероприятия</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to='/'>Паспорт школы</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to='/'>Устав школы</Link>
								</Dropdown.Item>
							</Dropdown>
						</li>
						<li className={styles.listItem}>
							<Dropdown
								className={styles.dropdown}
								title='Символика'
								trigger='hover'
							>
								<Dropdown.Item>
									<a href='/'>Герб Узбекистана</a>
								</Dropdown.Item>
								<Dropdown.Item>
									<a href='/'>Флаг Узбекистана</a>
								</Dropdown.Item>
								<Dropdown.Item>
									<a href='/'>Гимн Узбекистана</a>
								</Dropdown.Item>
								<Dropdown.Item>
									<a href='/'>Герб Каракалпакстана</a>
								</Dropdown.Item>
								<Dropdown.Item>
									<a href='/'>Флаг Каракалпакстана</a>
								</Dropdown.Item>
								<Dropdown.Item>
									<a href='/'>Гимн Каракалпакстана</a>
								</Dropdown.Item>
							</Dropdown>
						</li>
						<li className={styles.listItem}>
							<Link className={styles.address} to='/'>
								Адрес
							</Link>
						</li>
					</ul>
				</nav>
				<Dropdown
					className={styles.langDropdown}
					title='Выберите язык'
					trigger='hover'
				>
					<Dropdown.Item>
						<button className={styles.langBtn} type='button'>
							Английский
						</button>
					</Dropdown.Item>
					<Dropdown.Item>
						<button className={styles.langBtn} type='button'>
							Русский
						</button>
					</Dropdown.Item>
					<Dropdown.Item>
						<button className={styles.langBtn} type='button'>
							Узбекский
						</button>
					</Dropdown.Item>
					<Dropdown.Item>
						<button className={styles.langBtn} type='button'>
							Каракалпакский
						</button>
					</Dropdown.Item>
				</Dropdown>
				<button className={`${styles.menuButton} visible-mobile`} type='button'>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</header>
	)
}

export default Header
