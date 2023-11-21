export abstract class Money {
  protected _amount: number

  protected constructor (amount: number) {
    this._amount = amount
  }

  static dollar (amount: number): Money {
    return new Dollar(amount)
  }

  static franc (amount: number): Money {
    return new Franc(amount)
  }

  abstract currency (): string

  abstract times (multiplier: number): Money

  equals (object: object) {
    const money: Money = object as Money
    return this._amount === money._amount && money instanceof this.constructor
  }
}

export class Dollar extends Money {
  constructor (amount: number) {
    super(amount)
    this._amount = amount
  }

  currency (): string {
    return 'USD'
  }

  times (multiplier: number): Money {
    return new Dollar(this._amount * multiplier)
  }
}

export class Franc extends Money {
  #currency: string
  constructor (amount: number) {
    super(amount)
    this._amount = amount
    this.#currency = 'CHF'
  }

  currency (): string {
    return this.#currency
  }

  times (multiplier: number): Money {
    return new Franc(this._amount * multiplier)
  }
}
