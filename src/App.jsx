import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

// import Preloader from './components/Preloader'

const App = () => {
	return (
		<>
			<Header />
			<main className='page container'></main>
		</>
	)
}

export default App
