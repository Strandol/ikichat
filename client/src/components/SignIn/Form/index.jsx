import { Form, Icon, Input, Button } from 'antd'
import { connect } from 'react-redux'
import React, { Component } from "react";
import { getUsername, getPassword, isLoading } from '@store/auth/selectors';
import { changeUsername, changePassword } from '@store/auth/actions';

export class SignInForm extends Component {
	rules = {
		username: {
			rules: [{ required: true, message: 'Input your username!' }]
		},
		password: {
			rules: [{ required: true, message: 'Input your password!' }]
		}
	}

	onSubmit = e => {
		e.preventDefault()

		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Send values:', values);
			}
		})
	}

	hasErrors() {
		const { getFieldsError } = this.props.form
		const errors = getFieldsError()

		return Object.keys(errors).some(field => errors[field])
	}

	render() {
		const { getFieldDecorator: decorator, isFieldTouched, getFieldError } = this.props.form

		const usernameErr = isFieldTouched('username') && getFieldError('username')
		const passwordErr = isFieldTouched('password') && getFieldError('password')

		return (
			<Form layout='vertical' onSubmit={this.onSubmit}>
				<Form.Item validateStatus={usernameErr ? 'error' : ''} help={usernameErr || ''}>
					{decorator('username', this.rules.username)(
						<Input 
							prefix={<Icon type='user' />}
							placeholder='Username'
						/>
					)}
				</Form.Item>
				<Form.Item validateStatus={passwordErr ? 'error' : ''} help={passwordErr || ''}>
					{decorator('password', this.rules.password)(
						<Input 
							prefix={<Icon type='lock' />}
							type='password'
							placeholder='Password'
						/>
					)}
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit' disabled={this.hasErrors()}>
						Log in
					</Button>
				</Form.Item>
			</Form>
		)
	}
}

export const WrappedForm = Form.create({ 
	name: 'signin',
	mapPropsToFields: props => ({
		username: Form.createFormField({
			value: props.username
		}),
		password: Form.createFormField({
			value: props.password
		})
	}),
	onValuesChange(props, values) {
		const { username, password } = values

		if (username) props.changeUsername(username)

		if (password) props.changePassword(password)
	},
})(SignInForm) 

const mapState = state => ({
	username: getUsername(state),
	password: getPassword(state),
	loading: isLoading(state)
})

const mapDispatch = {
	changeUsername,
	changePassword
}

export default connect(
	mapState,
	mapDispatch
)(WrappedForm)
