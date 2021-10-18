import ItemRepository from '../../../domain/repository/ItemRepository';
import DatabaseConnection from '../../database/DatabaseConnection';
import { Item } from '../../../domain/entities/Item';

export default class ItemRepositoryDatabase implements ItemRepository {
  constructor(readonly databaseConnection: DatabaseConnection) {}

  async findById(idItem: number): Promise<Item> {
    //select * from ccaa.item where id_item == idItem
    // const db = this.databaseConnection.getDBRef();
    // const collectionRef = db.collection('items').where('id', '==', idItem);
    const [itemData] = await this.databaseConnection.getByField('items', 'id', idItem);
    return new Item(itemData.id, itemData.category, itemData.description, itemData.price);
  }
}
