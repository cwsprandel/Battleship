const shipFactory = require('./script')

let testShipCarrier
let testShipSub

beforeAll(() => {
    testShipCarrier = shipFactory('carrier')
    testShipSub = shipFactory('submarine')
})

describe('ship Length and initial Health tests', () => {
    test('ship has length (carrier)', () => {
        expect(testShipCarrier.length).toBe(5)
    })
    test('ship has length (sub)', () => {
        expect(testShipSub.length).toBe(3)
    })

    test('ship hits (carrier)', () => {
        expect(testShipCarrier.shipHitsArray.length).toBe(0)
    })

    test('ship hits (sub)', () => {
        expect(testShipSub.shipHitsArray.length).toBe(0)
    })
})

describe('ship hit tests', () => {
    beforeAll(() => {
        testShipCarrier.isHit()
        testShipSub.isHit()
    })

    test('ship hits (carrier)', () => {
        testShipCarrier.isHit()
        expect(testShipCarrier.shipHitsArray.length).toBe(2)
    })

    test('ship hits (sub)', () => {
        expect(testShipSub.shipHitsArray.length).toBe(1)
    })
})


