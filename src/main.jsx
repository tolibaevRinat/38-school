import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Address from './components/Address'

import App from './App.jsx'
import './scss/app.scss'

const root = createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
