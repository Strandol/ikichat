import React from 'react'
import Title from './components/Title'

import dogImg from 'Assets/img/dog.jpg'

import './app.scss'

const App = () => (
	<div className="app">
		<Title />
		<img src={dogImg} />
	</div>
)

export default App