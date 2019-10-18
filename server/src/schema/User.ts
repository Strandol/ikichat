import mongoose, { Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUser {
	name: string
	email: string
	password: string
}

type UserDoc = IUser & Document

const ROUNDS = 10

const userSchema: Schema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	email: {
		type: String,
		trim: true,
		required: true,
		unique: true
	},
	password: {
		type: String,
		trim: true,
		required: true
	}
})

userSchema.pre<UserDoc>('save', function (next) {
	this.password = bcrypt.hashSync(this.password, ROUNDS)
	next()
})

const User = mongoose.model<UserDoc>('User', userSchema)

export default User
