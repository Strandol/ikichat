import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import createStore from '@store/store'
import rootReducer from '@store/reducer'
import Routes from './routes'

import 'antd/dist/antd.css'
import './app.scss'

const store = createStore(rootReducer)

class App extends Component {
	render() {
		return (
			<div className='app'>
				<Provider store={store}>
					<BrowserRouter>
						<Routes />
					</BrowserRouter>
				</Provider>
			</div>
		)
	}
}

export default App
