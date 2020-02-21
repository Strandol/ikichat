import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import createStore from '@store/store'
import rootReducer from '@store/reducer'

import SignIn from './components/SignIn'

import 'antd/dist/antd.css'
import './app.scss'

const store = createStore(rootReducer)

class App extends Component {
	render() {
		return (
			<div className='app'>
				<Provider store={store}>
					<BrowserRouter>
						<Switch>
							<Route path='/signin' component={SignIn} />
						</Switch>
					</BrowserRouter>
				</Provider>
			</div>
		)
	}
}

export default App
