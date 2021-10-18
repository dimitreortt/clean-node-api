import { Coupon } from './Coupon';
import { OrderItem } from './OrderItem';
import { Item } from './Item';
import { CPF } from './Cpf';
import OrderCode from './OrderCode';

export class Order {
  private cpf: CPF;
  private orderItems: OrderItem[];
  private coupon: Coupon | undefined;
  private freight: number;
  code: OrderCode;

  constructor(cpf: string, readonly issueDate: Date = new Date(), readonly sequence: number = 1) {
    this.cpf = new CPF(cpf);
    this.orderItems = [];
    this.freight = 0;
    this.code = new OrderCode(issueDate, sequence);
  }

  addItem(item: Item, quantity: number) {
    this.freight += item.getFreight() * quantity;
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
  }

  getCpf() {
    return this.cpf;
  }

  getCoupon() {
    return this.coupon?.name;
  }

  getTotal() {
    let total = 0;
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal();
    }

    if (this.coupon) {
      total -= (this.coupon.percentage / 100) * total;
    }

    return total;
  }

  getFreight() {
    return this.freight;
  }

  addCoupon(coupon: Coupon) {
    if (coupon.isExpired(this.issueDate)) return;
    this.coupon = coupon;
  }
}
