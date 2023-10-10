export class Dollar {
  amount: number
  constructor (amount: number) {
    this.amount = amount
  }

  times (multiplier: number) {
    return new Dollar(this.amount * multiplier)
  }

  equals (object: object) {
    const dollar = object as Dollar
    return this.amount === dollar.amount
  }
}
