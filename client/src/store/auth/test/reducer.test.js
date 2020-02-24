import reduce from '../reducer'
import { AUTH_PASSWORD_CHANGE, AUTH_USERNAME_CHANGE } from '../actions'

describe('auth reducer', () => {
	it('change password', () => {
		const s = { password: undefined }
		const a = { type: AUTH_PASSWORD_CHANGE, password: 'xxx' }
		const r = reduce(s, a)

		expect(r).toEqual({
			password: 'xxx',
		})
	})

	it('change username', () => {
		const s = { password: undefined }
		const a = { type: AUTH_USERNAME_CHANGE, username: 'yyy' }
		const r = reduce(s, a)

		expect(r).toEqual({
			username: 'yyy',
		})
	})
})
