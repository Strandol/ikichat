import { changePassword, changeUsername } from "../actions"


describe('auth actions', () => {
    it('changePassword', () => {
        const a = {
            type: 'AUTH_PASSWORD_CHANGE',
            password: 'xxx'
        }

        expect(changePassword('xxx')).toEqual(a)
    })

    it('changeUsername', () => {
        const a = {
            type: 'AUTH_USERNAME_CHANGE',
            username: 'yyy'
        }

        expect(changeUsername('yyy')).toEqual(a)
    })
})