import React from 'react'

import styles from './Achievements.module.scss'

const Achievements = () => {
	return (
		<div className={styles.root}>
			<img
				className={styles.img}
				src='/images/bgr.png'
				alt='Achievements of our school'
			/>
		</div>
	)
}

export default Achievements
