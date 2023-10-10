import { Dollar } from './index'

describe('화폐 예제', () => {
  it('testMultiplication', () => {
    const five: Dollar = new Dollar(5)
    let product: Dollar = five.times(2)
    expect(product).toMatchObject(new Dollar(10))
    product = five.times(3)
    expect(product.amount).toBe(15)
  })

  it('testEquality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  })
})
