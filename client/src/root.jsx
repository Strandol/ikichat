import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import createStore from '@store/store'
import rootReducer from '@store/reducer'

import App from './app'

const state = window.__STATE__

const store = createStore(rootReducer, state)

const Root = () => (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)

export default Root
