import { exportAllDeclaration, tsExternalModuleReference } from '@babel/types'
import shipFactory from './shipFactory'
import gameboardFactory from './gameboardFactory'

test('shipFactory creates hit array matching ship length', () => {
    expect(shipFactory("ship",2).hitArray.length).toBe(2)
})

test('shipFactory creates hit array with zeros as default', () => {
    const expectedArray = [0,0]

    expect(shipFactory("ship",2).hitArray).toStrictEqual(expectedArray)
})

test('shipFactory records hit', () => {
    const localTest = shipFactory("ship",2)
    localTest.hit(1)
    const expectedArray = [0,1]

    expect(localTest.hitArray).toStrictEqual(expectedArray)
})

test('shipFactory returns current num of hits', () => {
    const localTest = shipFactory("ship",4)
    localTest.hit(1)
    localTest.hit(3)
    const expected = 2

    expect(localTest.checkNumOfHits()).toStrictEqual(expected)
})

test('shipFactory returns sunk status', () => {
    const localTest = shipFactory("ship",2)
    localTest.hit(1)
    localTest.hit(0)
    const expected = true

    expect(localTest.sunk).toBe(expected)
})

test('shipFactory resets ships', () => {
    const localTest = shipFactory("ship",2)
    localTest.hit(1)
    localTest.hit(0)
    localTest.resetShip()
    const expected = [0,0]

    expect(localTest.hitArray).toStrictEqual(expected)
})

test('gameboardFactory checks coord without ship', () => {
    const test = gameboardFactory()
    test.checkHit(0,0)

    expect(test.gameboard[0][0]).toStrictEqual(undefined)
})


test('gameboardFactory can place a ship', () => {
    const test = gameboardFactory()
    test.placeShip(4,[1,1],"horizontal")

    const testArray = [
        test.gameboard[1][1],
        test.gameboard[2][1],
        test.gameboard[3][1],
        test.gameboard[4][1],
        test.gameboard[5][1],
    ]

    expect(testArray).toStrictEqual([0,0,0,0,undefined])
})

test('gameboardFactory prevents ship from being placed beyond gameboard', () => {
    const test = gameboardFactory()

    expect(test.placeShip(4,[7,1],"horizontal")).toBe("invalid placement! ship length extends past gameboard")
})

test('gameboardFactory prevents placing ship if coord already occupied', () => {
    const test = gameboardFactory()
    test.gameboard[1][1] = 0

    expect(test.placeShip(4,[1,1],"horizontal")).toBe("invalid placement! one or more coordinates already occupied")
})