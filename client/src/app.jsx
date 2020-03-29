import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from './components/SignIn'

import './app.scss'

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/signin" component={SignIn} />
			</Switch>
		)
	}
}

export default App
