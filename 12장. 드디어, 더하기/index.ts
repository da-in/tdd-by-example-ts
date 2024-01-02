export interface Expression {}

export class Bank {}

export class Money implements Expression {
  protected _amount: number
  protected _currency: string

  constructor (amount: number, currency: string) {
    this._amount = amount
    this._currency = currency
  }

  static dollar (amount: number): Money {
    return new Money(amount, 'USD')
  }

  static franc (amount: number): Money {
    return new Money(amount, 'CHF')
  }

  currency (): string {
    return this._currency
  }

  times (multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency)
  }

  equals (object: object) {
    const money: Money = object as Money
    return this._amount === money._amount && this.currency() === money._currency
  }

  toString (): string {
    return this._amount + ' ' + this._currency
  }

  plus (addend: Money): Expression {
    return new Money(this._amount + addend._amount, this._currency)
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
}
