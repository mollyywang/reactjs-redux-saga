import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import User from '../view'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        username: 'wang',
        token: 'diwfjkasdlvkj',
        processing: false,
        isLogin: false,
        actions: {
            request: jest.fn(),
            success: jest.fn(),
            failure: jest.fn(),
            reset: jest.fn(),
        },
        msg: 'message',
    }
    const enzymeWrapper = mount(<User {...props} />)
    //that is a question ,use shallow,render or mount
    return {
        props,
        enzymeWrapper,
    }
}

describe('components', () => {
    describe('User', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper, props } = setup()
            expect(enzymeWrapper.find(User).props()).toMatchObject(props)
            expect(enzymeWrapper.find('.login-form').exists()).toBe(true)
        })
    })
})

