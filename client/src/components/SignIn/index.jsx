import React from 'react'
import Col from 'antd/lib/col';

import SignInForm from './Form'

import './index.scss'

const SignIn = () => {
	return (
		<Col span={6}>
			<SignInForm />
		</Col>
	)
}

export default SignIn
