import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
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
    const enzymeWrapper = shallow(<Search {...props} />)
    //that is a question ,use shallow,render or mount
    return {
        props,
        enzymeWrapper,
    }
}

describe('components', () => {
    describe('Product', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper, props } = setup()
            // console.log(enzymeWrapper)
            // console.log(props)
        })

    })
})

