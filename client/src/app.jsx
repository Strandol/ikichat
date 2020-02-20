import React, { Component } from 'react'
import { Provider } from 'react-redux'

import dogImg from '@assets/img/dog.jpg'
import store from '@store/store'

import SignIn from './components/SignIn'

import 'antd/dist/antd.css'
import './app.scss'

class App extends Component {
	render() {
		return (
			<div className="app">
				<SignIn />
				<img src={dogImg} />
			</div>
		)
	}
}

export default App
