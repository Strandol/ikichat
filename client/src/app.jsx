import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './app.scss'

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/signin" component={() => <div>Hello world</div>} />
			</Switch>
		)
	}
}

export default App
