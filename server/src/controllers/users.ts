import { RequestHandler } from 'express'

import User, { IUser } from '../schema/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createUser: RequestHandler = async (req, res, next) => {
	try {
		const doc: IUser = {
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		}

		const result = await User.create(doc)

		res.json({
			status: 'ok',
			message: 'User is added!',
		})
	} catch (error) {
		next(error)
	}
}

const authenticateUser: RequestHandler = async (req, res, next) => {
	try {
		const user = await User.findOne({ email: req.body.email })

		console.log(user)
	} catch (error) {
		next(error)
	}
}

export default {
	createUser,
	authenticateUser,
}
