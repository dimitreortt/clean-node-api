export class Coupon {
  constructor(readonly name: string, readonly percentage: number, readonly expirationDate?: Date) {}

  isExpired(today: Date = new Date()) {
    if (!this.expirationDate) return false;
    return this.expirationDate < today;
  }
}
