const shipFactory = require('./script')


describe('ship factory tests', () => {
    beforeAll(() => {
        let testShipCarrier = shipFactory('carrier')
    })

    test('ship has length', () => {
        expect(testShipCarrier.length).toBe(5)
    })
})
