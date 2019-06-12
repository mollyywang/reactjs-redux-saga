import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Search from '../view'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        name: 'product name',
        allNums: 254,
        actions: {
            productsGet:jest.fn(),
            productsreset:jest.fn()
        }
    }
    const enzymeWrapper = shallow(<Router><Search {...props} /></Router>)
    return {
        props,
        enzymeWrapper,
    }
}

describe('components', () => {
    describe('Search', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper, props } = setup()
            expect(enzymeWrapper.find(Search).props()).toMatchObject(props)
            expect(enzymeWrapper.find(Search).exists()).toBe(true)
        })
    })
})

