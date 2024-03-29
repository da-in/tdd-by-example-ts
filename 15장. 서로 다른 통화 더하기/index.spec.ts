import { type Expression, Money, Bank, Sum } from './index'

describe('화폐 예제', () => {
  it('testMultiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2)).toMatchObject(Money.dollar(10))
    expect(five.times(3)).toMatchObject(Money.dollar(15))
  })

  it('testEquality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy()
  })

  it('testCurrency', () => {
    expect(Money.dollar(1).currency()).toBe('USD')
    expect(Money.franc(1).currency()).toBe('CHF')
  })

  it('testSimpleAddition', () => {
    const five: Money = Money.dollar(5)
    const sum: Expression = five.plus(five)
    const bank: Bank = new Bank()
    const reduced: Money = bank.reduce(sum, 'USD')
    expect(Money.dollar(10)).toMatchObject(reduced)
  })

  it('testPlusReturnsSum', () => {
    const five: Money = Money.dollar(5)
    const result: Expression = five.plus(five)
    const sum: Sum = result as Sum
    expect(five).toMatchObject(sum.augend)
    expect(five).toMatchObject(sum.addend)
  })

  it('testReduceSum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4))
    const bank: Bank = new Bank()
    const result: Money = bank.reduce(sum, 'USD')
    expect(Money.dollar(7)).toMatchObject(result)
  })

  it('testReduceMoney', () => {
    const bank: Bank = new Bank()
    const result: Money = bank.reduce(Money.dollar(1), 'USD')
    expect(Money.dollar(1)).toMatchObject(result)
  })

  it('testReduceMoneyDifferentCurrency', () => {
    const bank: Bank = new Bank()
    bank.addRate('CHF', 'USD', 2)
    const result: Money = bank.reduce(Money.franc(2), 'USD')
    expect(Money.dollar(1)).toMatchObject(result)
  })

  it('testIdentityRate', () => {
    expect(new Bank().rate('USD', 'USD')).toBe(1)
  })

  it('testMixedAddition', () => {
    const fiveBucks: Expression = Money.dollar(5)
    const tenFrancs: Expression = Money.franc(10)
    const bank: Bank = new Bank()

    bank.addRate('CHF', 'USD', 2)
    const result: Money = bank.reduce(fiveBucks.plus(tenFrancs), 'USD')
    expect(Money.dollar(10)).toMatchObject(result)
  })
})
