export interface Expression {
  reduce: (bank: Bank, to: string) => Money
}

export class Bank {
  rates = new Map<string, number>()

  reduce (source: Expression, to: string): Money {
    return source.reduce(this, to)
  }

  rate (from: string, to: string): number {
    if (from === to) return 1
    // the example does not consider case when rate does not exist
    const rate = this.rates.get(new Pair(from, to).key()) ?? 0
    return rate
  }

  addRate (from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).key(), rate)
  }
}

class Pair {
  from: string
  to: string

  constructor (from: string, to: string) {
    this.from = from
    this.to = to
  }

  // map checks referential equality when comparing keys
  key () {
    return JSON.stringify(this)
  }

  equals (object: object) {
    const pair: Pair = object as Pair
    return this.from === pair.from && this.to === pair.to
  }

  hashcode () {
    return 0
  }
}

export class Sum implements Expression {
  augend: Expression
  addend: Expression

  constructor (augend: Expression, addend: Expression) {
    this.augend = augend
    this.addend = addend
  }

  reduce (bank: Bank, to: string) {
    const amount = this.augend.reduce(bank, to)._amount + this.addend.reduce(bank, to)._amount
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

  reduce (bank: Bank, to: string) {
    const rate: number = bank.rate(this._currency, to)
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
