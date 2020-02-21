export const AUTH_PASSWORD_CHANGE = 'AUTH_PASSWORD_CHANGE'

export const AUTH_USERNAME_CHANGE = 'AUTH_USERNAME_CHANGE'

export const changePassword = password => ({
	type: AUTH_PASSWORD_CHANGE,
	password
})

export const changeUsername = username => ({
	type: AUTH_USERNAME_CHANGE,
	username
})
