import React from 'react'

import styles from './Preloader.module.scss'

const Preloader = () => {
	return (
		<section className={styles.root}>
			<div className={styles.img}>
				<img src='/icons/full-logo.jpg' alt='full-logo' />
			</div>
		</section>
	)
}

export default Preloader
