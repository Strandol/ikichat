import { RequestHandler } from 'express'

const loggerMiddleware: RequestHandler = (req, res, next) => {
	console.log('Request:')
	console.log('Method:', req.method)
	console.log('Body:', req.body)
	console.log('Url:', req.url)

	next()
}

export default loggerMiddleware