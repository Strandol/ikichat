import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

import './SignIn.scss';

class SignIn extends Component {
	render() {
		return (
			<div className="sign-in-form">
				<Form inverted>
					<Form.Input label="Email" placeholder="Enter..." />
					<Form.Input label="Password" placeholder="Enter..." />
					<Button type="submit" color="blue" fluid>
						Login
					</Button>
				</Form>
				<div className="sign-in-forget-password">
					<span>Forget your password?</span>
				</div>
			</div>
		)
	}
}

export default SignIn
