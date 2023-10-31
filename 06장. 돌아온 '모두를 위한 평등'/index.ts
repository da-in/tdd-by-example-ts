export class Money {
  protected _amount: number

  constructor (amount: number) {
    this._amount = amount
  }

  equals (object: object) {
    const money: Money = object as Money
    return this._amount === money._amount
  }
}

export class Dollar extends Money {
  constructor (amount: number) {
    super(amount)
    this._amount = amount
  }

  times (multiplier: number) {
    return new Dollar(this._amount * multiplier)
  }
}

export class Franc extends Money {
  constructor (amount: number) {
    super(amount)
    this._amount = amount
  }

  times (multiplier: number) {
    return new Franc(this._amount * multiplier)
  }

  equals (object: object) {
    const franc: Money = object as Money
    return this._amount === franc._amount
  }
}
