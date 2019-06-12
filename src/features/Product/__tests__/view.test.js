import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Product from '../view'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        _id: 'reterwt',
        name: 'product name',
        price: 543.0,
        image: 'https://i.ebayimg.com/thumbs/images/m/mSeZz2WH8FWphu4bW_Dnuvw/s-l225.jpg',
        urllink: 'https://www.ebay.com/itm/Bambeco-Natural-Baby-Wipes-Bulk-Organic-Extracts-4-or-6-pk-80-wipes-per-packs/271495897128?hash=item3f366aa028:m:mSeZz2WH8FWphu4bW_Dnuvw',
        from: 'ebay',
        isInStar: true,
        actions: {
            removeStar_request: jest.fn(),
            addStar_request: jest.fn()
        }
    }
    const enzymeWrapper = mount(<Product {...props} />)
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

