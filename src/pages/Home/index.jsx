import React from 'react'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './Home.module.scss'

const Home = () => {
	const { t } = useTranslation()

	const settings = {
		dots: false,
		infinite: true,
		adaptiveHeight: true,
		className: 'wrapper',
		speed: 500,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<section className={styles.root}>
			<Slider {...settings}>
				{[...new Array(10)].map((_, i) => (
					<div key={i} className={styles.wrapper}>
						<img
							src={`/images/korean/${i + 1}.jpg`}
							lazy='loading'
							alt='korean'
							width={1000}
							height={600}
						/>
					</div>
				))}
			</Slider>

			<p>{t('home.text')}</p>
		</section>
	)
}

export default Home
