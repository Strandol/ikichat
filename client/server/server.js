import express from 'express'
import path from 'path'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import rootReducer from '@store/reducer.js'

import App from '../src/app.jsx'
import configureStore from '../src/store/store'
import template from './template'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static(path.resolve(__dirname, '../public')))

app.get('/*', (req, res) => {
	const preloadedData = {
		auth: {
			units: 22,
			loading: false,
		},
	}

	const store = configureStore(rootReducer, preloadedData)
	const state = store.getState()

	const app = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<App />
			</StaticRouter>
		</Provider>
	)

	const html = template('Ikichat ssr app', state, app)

	res.send(html)
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
