export class Money {
  protected _amount: number

  constructor (amount: number) {
    this._amount = amount
  }

  static dollar (amount: number): Dollar {
    return new Dollar(amount)
  }

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

  times (multiplier: number): Money {
    return new Dollar(this._amount * multiplier)
  }
}

export class Franc extends Money {
  constructor (amount: number) {
    super(amount)
    this._amount = amount
  }

  times (multiplier: number): Money {
    return new Franc(this._amount * multiplier)
  }
}
