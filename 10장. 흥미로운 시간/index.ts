export abstract class Money {
  protected _amount: number
  protected _currency: string

  protected constructor (amount: number, currency: string) {
    this._amount = amount
    this._currency = currency
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
  constructor (amount: number, currency: string) {
    super(amount, currency)
    this._amount = amount
    this._currency = currency
  }

  currency (): string {
    return this._currency
  }

  times (multiplier: number): Money {
    return new Dollar(this._amount * multiplier, 'USD')
  }
}

export class Franc extends Money {
  constructor (amount: number, currency: string) {
    super(amount, currency)
    this._amount = amount
    this._currency = currency
  }

  currency (): string {
    return this._currency
  }

  times (multiplier: number): Money {
    return new Franc(this._amount * multiplier, 'CHF')
  }
}
