export abstract class Money {
  protected _amount: number
  protected _currency: string

  protected constructor (amount: number) {
    this._amount = amount
  }

  static dollar (amount: number): Money {
    return new Dollar(amount, 'USD')
  }

  static franc (amount: number): Money {
    return new Franc(amount, 'CHF')
  }

  currency (): string {
    return this._currency
  }

  abstract times (multiplier: number): Money

  equals (object: object) {
    const money: Money = object as Money
    return this._amount === money._amount && money instanceof this.constructor
  }
}

export class Dollar extends Money {
  #currency: string
  constructor (amount: number, currency: string) {
    super(amount)
    this._amount = amount
    this.#currency = currency
  }

  currency (): string {
    return this.#currency
  }

  times (multiplier: number): Money {
    return Money.dollar(this._amount * multiplier)
  }
}

export class Franc extends Money {
  #currency: string
  constructor (amount: number, currency: string) {
    super(amount)
    this._amount = amount
    this.#currency = currency
  }

  currency (): string {
    return this.#currency
  }

  times (multiplier: number): Money {
    return Money.franc(this._amount * multiplier)
  }
}
