import Reducer from '../reducer'
import * as Types from '../actionType'

const INITIAL_STATE = {
    items: [],
    processing: false,
}

describe('Star reducer', () => {
    it('should return the initial state', () => {
        expect(Reducer(undefined, {})).toEqual(INITIAL_STATE)
    })

    it('should handle GETSTAR_REQUEST', () => {
        expect(
            Reducer(INITIAL_STATE, {
                type: Types.GETSTAR_REQUEST,
                payload: {}
            })
        ).toEqual({
            ...INITIAL_STATE,
            processing: true,
        })
    })

    it('should handle GETSTAR_SUCCESS', () => {
        expect(
            Reducer(INITIAL_STATE, {
                type: Types.GETSTAR_SUCCESS,
                payload: {
                    starsData: [
                        {
                            _id: 'sdasd',
                            name: 'Bambeco Natural Baby Wipes Bulk Organic Extracts 4 or 6 pk 80 wipes per',
                            price: 24.99,
                            image: 'https://i.ebayimg.com/thumbs/images/m/mSeZz2WH8FWphu4bW_Dnuvw/s-l225.jpg',
                            urllink: 'https://www.ebay.com/itm/Bambeco-Natural-Baby-Wipes-Bulk-Organic-Extracts-4-or-6-pk-80-wipes-per-packs/271495897128?hash=item3f366aa028:m:mSeZz2WH8FWphu4bW_Dnuvw',
                            from: 'ebay'
                        }
                    ]
                }
            })
        ).toEqual({
            ...INITIAL_STATE,
            processing: false,
            items: [
                {
                    _id: 'sdasd',
                    name: 'Bambeco Natural Baby Wipes Bulk Organic Extracts 4 or 6 pk 80 wipes per',
                    price: 24.99,
                    image: 'https://i.ebayimg.com/thumbs/images/m/mSeZz2WH8FWphu4bW_Dnuvw/s-l225.jpg',
                    urllink: 'https://www.ebay.com/itm/Bambeco-Natural-Baby-Wipes-Bulk-Organic-Extracts-4-or-6-pk-80-wipes-per-packs/271495897128?hash=item3f366aa028:m:mSeZz2WH8FWphu4bW_Dnuvw',
                    from: 'ebay'
                }
            ],
        })
    })

    it('should handle GETSTAR_FAILURE', () => {
        expect(
            Reducer(INITIAL_STATE, {
                type: Types.GETSTAR_FAILURE,
                payload: { error: 'this is an error msg' }
            })
        ).toEqual({
            ...INITIAL_STATE,
            processing: false,
        })
    })

    it('should handle REMOVESTAR_REQUEST', () => {
        expect(
            Reducer(
                {
                    ...INITIAL_STATE,
                    items: [
                        {
                            _id: 'sdasd',
                            name: 'Bambeco Natural Baby Wipes Bulk Organic Extracts 4 or 6 pk 80 wipes per',
                            price: 24.99,
                            image: 'https://i.ebayimg.com/thumbs/images/m/mSeZz2WH8FWphu4bW_Dnuvw/s-l225.jpg',
                            urllink: 'https://www.ebay.com/itm/Bambeco-Natural-Baby-Wipes-Bulk-Organic-Extracts-4-or-6-pk-80-wipes-per-packs/271495897128?hash=item3f366aa028:m:mSeZz2WH8FWphu4bW_Dnuvw',
                            from: 'ebay'
                        }
                    ]
                }, {
                type: Types.REMOVESTAR_REQUEST,
                payload: 'sdasd'
                
            })
        ).toEqual({
            ...INITIAL_STATE,
            items:[]
        })
    })
    it('should handle ADDSTAR_REQUEST', () => {
        expect(
            Reducer(
                {
                    ...INITIAL_STATE,
                    
                }, {
                type: Types.ADDSTAR_REQUEST,
                payload: {
                    _id: 'sdasd',
                    name: 'Bambeco Natural Baby Wipes Bulk Organic Extracts 4 or 6 pk 80 wipes per',
                    price: 24.99,
                    image: 'https://i.ebayimg.com/thumbs/images/m/mSeZz2WH8FWphu4bW_Dnuvw/s-l225.jpg',
                    urllink: 'https://www.ebay.com/itm/Bambeco-Natural-Baby-Wipes-Bulk-Organic-Extracts-4-or-6-pk-80-wipes-per-packs/271495897128?hash=item3f366aa028:m:mSeZz2WH8FWphu4bW_Dnuvw',
                    from: 'ebay'
                }
            })
        ).toEqual({
            ...INITIAL_STATE,
            items:[
                {
                    _id: 'sdasd',
                    name: 'Bambeco Natural Baby Wipes Bulk Organic Extracts 4 or 6 pk 80 wipes per',
                    price: 24.99,
                    image: 'https://i.ebayimg.com/thumbs/images/m/mSeZz2WH8FWphu4bW_Dnuvw/s-l225.jpg',
                    urllink: 'https://www.ebay.com/itm/Bambeco-Natural-Baby-Wipes-Bulk-Organic-Extracts-4-or-6-pk-80-wipes-per-packs/271495897128?hash=item3f366aa028:m:mSeZz2WH8FWphu4bW_Dnuvw',
                    from: 'ebay'
                }
            ]
        })
    })
})