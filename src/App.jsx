import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header'
import Address from './components/Address'
import SchoolHead from './components/SchoolHead'
import DeputyHeadmaster from './components/DeputyHeadmaster'
import Psychologist from './components/Psyschologist'

const App = () => {
	return (
		<>
			<Header />
			<main className='page'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/address' element={<Address />} />
					<Route path='/schoolhead' element={<SchoolHead />} />
					<Route path='/deputyheadmaster' element={<DeputyHeadmaster />} />
					<Route path='/psychologists' element={<Psychologist />} />
					<Route path='*' element={<h1>Not Found</h1>} />
				</Routes>
				<Home />
			</main>
		</>
	)
}

export default App
