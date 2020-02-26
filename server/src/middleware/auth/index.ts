import { RequestHandler } from 'express'
import jwt, { VerifyErrors } from 'jsonwebtoken'

const authMiddleware: RequestHandler = (req, res, next) => {
	const token = req.headers['x-access-token'] as string

	jwt.verify(token, req.app.get('secretKey'), (err: VerifyErrors, decoded: any) => {
		if (err) {
			res.json({
				status: 'error',
				message: err.message
			})
		} else {
			req.body.userId = decoded.id
			next();
		}
	})
}

export default authMiddleware