import React from 'react'
import { Col, Layout } from 'antd'

import SignInForm from './Form'

import './index.scss'

const SignIn = () => {
	return (
		<div className='h-full flex items-center justify-center'>
			<Col span={6}>
				<SignInForm />
			</Col>
		</div>
	)
}

export default SignIn
