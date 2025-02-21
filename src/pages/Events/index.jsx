import React from 'react'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './Events.module.scss'
import Employees from '../../components/Employees'

const Events = () => {
	const { t } = useTranslation()

	const settings = {
		dots: false,
		infinite: true,
		adaptiveHeight: true,
		speed: 500,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<section className={styles.root}>
			<h1 className={`${styles.title} title`}>{t('events.title')}</h1>
			<Slider {...settings}>
				{[...new Array(12)].map((_, i) => (
					<div key={i}>
						<Employees
							img={`/images/posts/${i + 1}.jpg`}
							title={t(`events.post_${i + 1}`)}
						/>
					</div>
				))}
				<div className={styles.video}>
					<video src="/video/01.mp4" controls></video>
					<p>{t('events.videos.post_1')}</p>
				</div>
			</Slider>
		</section>
	)
}

export default Events
