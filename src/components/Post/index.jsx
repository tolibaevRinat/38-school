import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Post.module.scss'

const Post = ({ imgUrl, descr }) => {
	const { t } = useTranslation()

	return (
		<div className={`${styles.inner} container`}>
			<div className={styles.img}>
				<img src={imgUrl} alt='post image' width={1000} height={1000} />
			</div>
			<p className={styles.text}>{t(descr)}</p>
		</div>
	)
}

export default Post
