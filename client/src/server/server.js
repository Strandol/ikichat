import express from 'express'
import { renderToString } from 'react-dom/server'
import React from "react";
import App from '../app.jsx';
import template from './template';

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
	const app = renderToString(<App />);
	const html = template(app);

	res.send(html);
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})