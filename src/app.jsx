import React from 'react'
import SignIn from './components/SignIn'

import dogImg from 'Assets/img/dog.jpg'

import 'antd/dist/antd.css'
import './app.scss'
import './tailwind.css'

const App = () => (
	<div className="app">
		<SignIn />
		<img src={dogImg} />
	</div>
)

export default App
