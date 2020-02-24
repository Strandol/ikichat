import { getUsername, getPassword, isLoading } from "../selectors"

describe('auth selectors', () => {
    const state = s => ({ auth: s })

    it('getUsername', () => {
        const s = state({ username: 'xyz' })
        expect(getUsername(s)).toEqual('xyz')
    })

    it('getPassword', () => {
        const s = state({ password: 'xxx' })
		expect(getPassword(s)).toEqual('xxx')
    })

    it('isLoading', () => {
        const s = state({ loading: true })
        expect(isLoading(s)).toBeTruthy()
    })
})