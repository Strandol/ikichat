import { RequestHandler } from 'express'
import ch from 'chalk'

const loggerMiddleware: RequestHandler = (req, res, next) => {
	console.log(ch.blue('Request:'))
	console.log(ch.blue('Method:'), req.method)
	console.log(ch.blue('Body:'), req.body)
	console.log(ch.blue('Url:'), req.url)

	next()
}

export default loggerMiddleware