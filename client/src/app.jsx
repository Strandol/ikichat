import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './pages/Login/Login';

import './app.scss'

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Login} />
			</Switch>
		)
	}
}

export default App
