import { OrderRepository } from '../../domain/repository/OrderRepository';
import { Order } from '../../domain/entities/Order';
import { Item } from '../../domain/entities/Item';
import ItemRepository from '../../domain/repository/ItemRepository';
import PlaceOrderInput from '../dto/PlaceOrderInput';
import PlaceOrderOutput from '../dto/PlaceOrderOutput';
import PlaceOrderOutputAssembler from '../dto/PlaceOrderOutputAssembler';

export default class PlaceOrder {
  constructor(readonly itemRepository: ItemRepository, readonly orderRepository: OrderRepository) {}

  async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
    const order = new Order(input.cpf, input.issueDate, 1);
    for (const orderItem of input.orderItems) {
      const item = await this.itemRepository.findById(orderItem.idItem);
      order.addItem(item, orderItem.quantity);
    }
    this.orderRepository.save(order);
    return PlaceOrderOutputAssembler.assembly(order);
  }
}
