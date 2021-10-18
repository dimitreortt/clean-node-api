export class OrderItem {
  constructor(readonly idItem: number, readonly price: number, readonly amount: number) {}

  getTotal() {
    return this.price * this.amount;
  }

  // getShippingFactor() {
  //   return this.amount * this.itemPhysicalAttributes.getCube();
  // }
}
