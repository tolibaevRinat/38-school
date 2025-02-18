import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import styles from './Inner.module.scss'

import Header from '../Header'
import Home from '../../pages/Home'
import Director from '../../pages/Director'
import Deputy from '../../pages/Deputy'
import Psychologist from '../../pages/Psychologist'
import SchoolPassport from '../../pages/SchoolPassport'
import SchoolCharter from '../../pages/SchoolCharter'
import Events from '../../pages/Events'
import Address from '../../pages/Address'

const Inner = () => {
	return (
		<>
			<Header />
			<main className='page container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/director' element={<Director />} />
					<Route path='/deputy' element={<Deputy />} />
					<Route path='/psychologist' element={<Psychologist />} />
					<Route path='/school-passport' element={<SchoolPassport />} />
					<Route path='/school-charter' element={<SchoolCharter />} />
					<Route path='/events' element={<Events />} />
					<Route path='/address' element={<Address />} />
				</Routes>
			</main>
		</>
	)
}

export default Inner
