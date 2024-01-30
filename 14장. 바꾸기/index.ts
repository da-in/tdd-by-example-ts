export interface Expression {
  reduce: (to: string) => Money
}

export class Bank {
  reduce (source: Expression, to: string): Money {
    return source.reduce(to)
  }
}

export class Sum implements Expression {
  augend: Money
  addend: Money

  constructor (augend: Money, addend: Money) {
    this.augend = augend
    this.addend = addend
  }

  reduce (to: string) {
    const amount = this.augend._amount + this.addend._amount
    return new Money(amount, to)
  }
}

export class Money implements Expression {
  _amount: number
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
    return new Sum(this, addend)
  }

  reduce (to: string) {
    const rate: number = this._currency === 'CHF' && to === 'USD' ? 2 : 1
    return new Money(this._amount / rate, to)
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
