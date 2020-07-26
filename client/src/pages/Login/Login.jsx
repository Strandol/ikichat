import React, { Component } from 'react'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

import './Login.scss'

class Login extends Component {
	state = {
		tabIdx: 0,
	}

	panes = [
		{
			name: 'Sign In',
			render: () => <SignIn />,
		},
		{
			name: 'Sign Up',
			render: () => <SignUp />
		},
	]

	onClickTab = tabIdx => this.setState({ tabIdx })

	isTabActive = i => this.state.tabIdx === i

	renderTab = (pane, i) => (
		<div
			key={pane.name + i}
			className={`login-tab${this.isTabActive(i) ? ' active' : ''}`}
			onClick={() => this.onClickTab(i)}
		>
			{pane.name}
		</div>
	)

	renderTabs = () => (
		<div className="login-tabs">
			{this.panes.map(this.renderTab)}
		</div>
	)

	renderContent = () => this.panes[this.state.tabIdx].render()

	render() {
		return (
			<div className="login-page">
				<div className="login-form">
					{this.renderTabs()}
					{this.renderContent()}
				</div>
			</div>
		)
	}
}

export default Login
