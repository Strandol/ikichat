import express from 'express'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import App from '../app.jsx'
import configureStore from '../store/store'
import template from './template'
import rootReducer from '@store/reducer.js'
import Routes from '../routes.jsx'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
	const preloadedData = {
		ssr: {
			units: 22,
			loading: false,
		},
	}

	const store = configureStore(rootReducer, preloadedData)
	const state = store.getState()

	const app = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<Routes />
			</StaticRouter>
		</Provider>
	)

	const html = template('Ikichat ssr app', state, app)

	res.send(html)
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
