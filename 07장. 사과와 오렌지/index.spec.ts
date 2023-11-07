import { Franc, Money } from './index'

describe('화폐 예제', () => {
  it('testMultiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2)).toMatchObject(Money.dollar(10))
    expect(five.times(3)).toMatchObject(Money.dollar(15))
  })

  it('testEquality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy()
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy()
    expect(new Franc(5).equals(Money.dollar(5))).toBeFalsy()
  })

  it('testFrancMultiplication', () => {
    const five: Franc = new Franc(5)
    expect(five.times(2)).toMatchObject(new Franc(10))
    expect(five.times(3)).toMatchObject(new Franc(15))
  })
})
