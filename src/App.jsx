import React from 'react'

import Loader from './components/Loader'

const Inner = React.lazy(() => import('./components/Inner'))

const App = () => {
	return (
		<React.Suspense fallback={<Loader />}>
			<Inner></Inner>
		</React.Suspense>
	)
}

export default App
