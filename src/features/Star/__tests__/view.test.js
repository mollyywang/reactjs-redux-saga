import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Star from '../view'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        items: [{
            _id: 'erwqer',
            name: 'Bambeco Natural Baby Wipes Bulk Organic Extracts 4 or 6 pk 80 wipes per',
            price: 24.99,
            image: 'https://i.ebayimg.com/thumbs/images/m/mSeZz2WH8FWphu4bW_Dnuvw/s-l225.jpg',
            urllink: 'https://www.ebay.com/itm/Bambeco-Natural-Baby-Wipes-Bulk-Organic-Extracts-4-or-6-pk-80-wipes-per-packs/271495897128?hash=item3f366aa028:m:mSeZz2WH8FWphu4bW_Dnuvw',
            from: 'ebay'
        }, {
            _id: 'rfsvbf',
            name: 'Baby Wipes Unscented Tub',
            price: 6.00,
            image: 'https://shop.coles.com.au/wcsstore/Coles-CAS/images/6/0/4/6044712-th.jpg',
            urllink: 'https://shop.coles.com.au/a/a-national/product/huggies--baby-wipes-unscented-tub',
            from: 'coles'
        }],
        actions: {
            getStar_request: jest.fn(),
            getStar_success: jest.fn(),
            getStar_failure: jest.fn(),
            removeStar_request: jest.fn(),
            addStar_request: jest.fn()
        }
    }
    const enzymeWrapper = shallow(<Star {...props} />)
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

