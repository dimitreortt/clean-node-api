import { OrderRepository } from './../../../domain/repository/OrderRepository';
import { Order } from '../../../domain/entities/Order';
import DatabaseConnection from '../../database/DatabaseConnection';

export default class OrderRepositoryDatabase implements OrderRepository {
  constructor(readonly databaseConnection: DatabaseConnection) {}

  async save(order: Order): Promise<void> {
    // await this.databaseConnection.
  }
}
