import { ErrorRequestHandler } from 'express'

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
	if (err.status === 404) {
		res.status(404).json({ message: 'Not Found' })
		
		return;
	}

	res.status(500).send('Internal server error')
}

export default errorMiddleware
