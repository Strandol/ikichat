import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

import './SignUp.scss'

class SignUp extends Component {
	render() {
		return (
			<div className="sign-up-form">
				<Form inverted>
					<Form.Input label="Full Name" placeholder="Enter..." />
					<Form.Input label="Email" placeholder="Enter..." />
					<Form.Input label="Password" placeholder="Enter..." />
					<Form.Input label="Retype Password" placeholder="Enter..." />
					<Button type="submit" color="blue" fluid>
						Submit
					</Button>
				</Form>
				<div className="sign-in-forget-password">
					<span>Forget your password?</span>
				</div>
			</div>
		)
	}
}

export default SignUp
