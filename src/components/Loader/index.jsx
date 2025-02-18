import React from 'react'
import { ClockLoader } from 'react-spinners'

import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.root}>
			<ClockLoader />
		</div>
	)
}

export default Loader
