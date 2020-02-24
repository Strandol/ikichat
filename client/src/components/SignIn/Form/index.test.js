import { shallow } from 'enzyme'
import React from 'react'

import { WrappedForm } from './index'

describe('SignInForm', () => {
    it('render', () => {
        const c = shallow(<WrappedForm />)

        expect(c).toMatchSnapshot()
    })
})
