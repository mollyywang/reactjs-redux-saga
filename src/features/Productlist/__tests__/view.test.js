import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Productlist from '../view'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        processing: false,
        name: 'product name',
        items: [],
        allNums: 234,
        index: 0,
        counts: 16,
        actions: {
            request: jest.fn(),
            success: jest.fn(),
            failure: jest.fn(),
            reset: jest.fn(),
        }
    }
    const enzymeWrapper = mount(<Productlist {...props} />)
    return {
        props,
        enzymeWrapper,
    }
}

describe('components', () => {
    describe('Productlist', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper, props } = setup()
            expect(enzymeWrapper.find(Productlist).props()).toMatchObject(props)
            expect(enzymeWrapper.find(Productlist).exists()).toBe(true)
        })
    })
})

