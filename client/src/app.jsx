import React, { Component } from 'react'
import { Provider } from 'react-redux'

import dogImg from '@assets/img/dog.jpg'
import createStore from '@store/store'
import rootReducer from '@store/reducer'

import SignIn from './components/SignIn'

import 'antd/dist/antd.css'
import './app.scss'

const store = createStore(rootReducer)

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="app">
					<SignIn />
					<img src={dogImg} />
				</div>
			</Provider>
		)
	}
}

export default App
