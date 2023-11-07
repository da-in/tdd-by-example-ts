import { Dollar, Franc, Money } from './index'

describe('화폐 예제', () => {
  it('testMultiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2)).toMatchObject(new Dollar(10))
    expect(five.times(3)).toMatchObject(new Dollar(15))
  })

  it('testEquality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy()
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy()
    expect(new Franc(5).equals(new Dollar(5))).toBeFalsy()
  })

  it('testFrancMultiplication', () => {
    const five: Franc = new Franc(5)
    expect(five.times(2)).toMatchObject(new Franc(10))
    expect(five.times(3)).toMatchObject(new Franc(15))
  })
})
