import React from 'react'

import styles from './Employees.module.scss'

const Employees = ({ img, title }) => {
	return (
		<section className={styles.root}>
			<div className={styles.img}>
				<img
					src={img}
					alt='Employees'
					width={1000}
					height={600}
					lazy='loading'
				/>
			</div>
			<p className={styles.text}>{title}</p>
		</section>
	)
}

export default Employees
