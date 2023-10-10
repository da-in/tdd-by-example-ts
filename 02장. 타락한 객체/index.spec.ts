import { Dollar } from './index'

describe('화폐 예제', () => {
  it('testMultiplication', () => {
    const five: Dollar = new Dollar(5)
    five.times(2)
    expect(five.amount).toBe(10)
    five.times(3)
    expect(five.amount).toBe(15)
  })
})
