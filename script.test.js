import {shipFactory} from '../Battleship'

let testShipCarrier
let testShipSub

beforeAll(() => {
    testShipSub = shipFactory('submarine')
    testShipCarrier = shipFactory('carrier')
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
        testShipCarrier.shipHit()
        testShipSub.shipHit()
    })

    test('ship hits (carrier)', () => {
        testShipCarrier.shipHit()
        expect(testShipCarrier.shipHitsArray.length).toBe(2)
    })

    test('ship hits (sub)', () => {
        expect(testShipSub.shipHitsArray.length).toBe(1)
    })

    test('ship sunk (carrier)', () => {
        testShipCarrier.shipHit()
        testShipCarrier.shipHit()
        testShipCarrier.shipHit()
        expect(testShipCarrier.sunkCheck()).toBe(true)
    })
})


