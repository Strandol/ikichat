import { AUTH_PASSWORD_CHANGE, AUTH_USERNAME_CHANGE } from './actions'

const DEFAULT_STATE = Object.freeze({
	username: undefined,
	password: undefined,
	loading: false
})

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case AUTH_PASSWORD_CHANGE:
			return {
				...state,
				password: action.password
			}

		case AUTH_USERNAME_CHANGE:
			return {
				...state,
				username: action.username
			}

		default:
			return state
	}
}
