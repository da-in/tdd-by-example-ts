import { Money } from './index'

describe('화폐 예제', () => {
  it('testMultiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2)).toMatchObject(Money.dollar(10))
    expect(five.times(3)).toMatchObject(Money.dollar(15))
  })

  it('testEquality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
    expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy()
    expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy()
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy()
  })

  it('testFrancMultiplication', () => {
    const five: Money = Money.franc(5)
    expect(five.times(2)).toMatchObject(Money.franc(10))
    expect(five.times(3)).toMatchObject(Money.franc(15))
  })
})
