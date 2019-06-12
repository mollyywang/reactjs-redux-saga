import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Me from '../view'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        username: 'wang'
    }
    const enzymeWrapper = mount(
    <Router>
    <Me {...props} >
        <section></section>
    </Me></Router>)
    //that is a question ,use shallow,render or mount
    return {
        props,
        enzymeWrapper,
    }
}

describe('components', () => {
    describe('Me', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper, props } = setup()
            expect(enzymeWrapper.find(Me).props()).toMatchObject(props)
            expect(enzymeWrapper.find('.user-detail').exists()).toBe(true)
        })
    })
})

