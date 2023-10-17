export class Money {
}

export class Dollar extends Money {
  #amount: number
  constructor (amount: number) {
    super()
    this.#amount = amount
  }

  times (multiplier: number) {
    return new Dollar(this.#amount * multiplier)
  }

  equals (object: object) {
    const dollar = object as Dollar
    return this.#amount === dollar.#amount
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
