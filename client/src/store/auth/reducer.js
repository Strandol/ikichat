import { SIGN_IN } from './actions'

const DEFAULT_STATE = Object.freeze({
	user: undefined,
})

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				user: true,
			}
		default:
			return state
	}
}
