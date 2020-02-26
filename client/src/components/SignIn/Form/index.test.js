import { shallow, mount } from 'enzyme'
import React from 'react'
import toJson from 'enzyme-to-json'

import { WrappedForm } from './index'
import { SignInForm } from '.'

describe('SignInForm', () => {
    const p = {
        form: {
            getFieldDecorator: jest.fn(() => el => el),
            isFieldTouched: jest.fn(),
            getFieldError: jest.fn(),
            getFieldsError: jest.fn(() => ({})),
            validateFields: jest.fn()
        }
    }

    it('render signInForm', () => {
        const c = shallow(<SignInForm {...p}/>)
        expect(toJson(c)).toMatchSnapshot()
    })

    it('validate fields on submit', () => {
        const c = mount(<WrappedForm />)
        const form = c.find(SignInForm).instance()

        const validateSpy = spyOn(form.props.form, 'validateFields')
        const ev = { preventDefault: jest.fn() }

        form.onSubmit(ev)

        expect(ev.preventDefault).toHaveBeenCalled()
        expect(validateSpy).toHaveBeenCalled()
    })
})
