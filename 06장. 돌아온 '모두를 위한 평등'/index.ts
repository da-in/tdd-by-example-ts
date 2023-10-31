export class Money {
  protected _amount: number

  constructor (amount: number) {
    this._amount = amount
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

  equals (object: object) {
    const dollar: Money = object as Money
    return this._amount === dollar._amount
  }
}

export class Franc {
  #amount: number
  constructor (amount: number) {
    this.#amount = amount
  }

  times (multiplier: number) {
    return new Franc(this.#amount * multiplier)
  }

  equals (object: object) {
    const franc = object as Franc
    return this.#amount === franc.#amount
  }
}
