const shipFactory = require('./script')


describe('ship factory tests', () => {
    let testShipCarrier
    beforeAll(() => {
        testShipCarrier = shipFactory('carrier')
        testShipSub = shipFactory('submarine')
    })

    test('ship has length (test 1)', () => {
        expect(testShipCarrier.length).toBe(5)
    })
    test('ship has length (test 2)', () => {
        expect(testShipSub.length).toBe(3)
    })

    test('ship ', () => {
        expect(testShipCarrier.length).toBe(5)
    })
})
