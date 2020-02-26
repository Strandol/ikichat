import { RequestHandler } from 'express'

const notFoundMiddleware: RequestHandler = (req, res, next) => {
	next({ status: 404, message: 'Not Found' })
}

export default notFoundMiddleware