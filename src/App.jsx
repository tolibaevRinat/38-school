import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Preloader from './components/Preloader'

const Home = React.lazy(() => import('./pages/Home'))
const Header = React.lazy(() => import('./components/Header'))
const Address = React.lazy(() => import('./components/Address'))
const SchoolHead = React.lazy(() => import('./components/SchoolHead'))
const DeputyHeadmaster = React.lazy(() =>
	import('./components/DeputyHeadmaster')
)
const Psychologist = React.lazy(() => import('./components/Psyschologist'))
const SchoolPassport = React.lazy(() => import('./components/SchoolPassport'))
const SchoolCharter = React.lazy(() => import('./components/SchoolCharter'))

const App = () => {
	return (
		<>
			<React.Suspense fallback={<Preloader />}>
				<Header />
			</React.Suspense>
			<main className='page'>
				<Routes>
					<Route
						path='/'
						element={
							<React.Suspense fallback={<Preloader />}>
								<Home />
							</React.Suspense>
						}
					/>
					<Route
						path='/address'
						element={
							<React.Suspense fallback={<Preloader />}>
								<Address />
							</React.Suspense>
						}
					/>
					<Route
						path='/schoolhead'
						element={
							<React.Suspense fallback={<Preloader />}>
								<SchoolHead />
							</React.Suspense>
						}
					/>
					<Route
						path='/deputyheadmaster'
						element={
							<React.Suspense fallback={<Preloader />}>
								<DeputyHeadmaster />
							</React.Suspense>
						}
					/>
					<Route
						path='/psychologists'
						element={
							<React.Suspense fallback={<Preloader />}>
								<Psychologist />
							</React.Suspense>
						}
					/>
					<Route
						path='/schoolpassport'
						element={
							<React.Suspense fallback={<Preloader />}>
								<SchoolPassport />
							</React.Suspense>
						}
					/>
					<Route
						path='/schoolcharter'
						element={
							<React.Suspense fallback={<Preloader />}>
								<SchoolCharter />
							</React.Suspense>
						}
					/>
					<Route path='*' element={<h1>Not Found</h1>} />
				</Routes>
			</main>
		</>
	)
}

export default App
