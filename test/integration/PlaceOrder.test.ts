import PlaceOrder from '../../src/application/usecase/PlaceOrder';
import DatabaseConnectionAdapter from '../../src/infra/database/DatabaseConnectionAdapter';
import ItemRepositoryDatabase from '../../src/infra/repository/database/ItemRepositoryDatabase';
import OrderRepositoryMemory from '../../src/infra/repository/memory/OrderRepositoryMemory';
import ItemRepositoryMemory from '../../src/infra/repository/memory/ItemReposityoryMemory';
import PlaceOrderInput from '../../src/application/dto/PlaceOrderInput';

test('Deve fazer um pedido', async () => {
  // isso aqui é uma operação simulando alguém agindo do lado de fora do sistema
  const input = new PlaceOrderInput(
    '517.026.470-48',
    [
      {
        idItem: 1,
        quantity: 1,
      },
      {
        idItem: 2,
        quantity: 1,
      },
      {
        idItem: 3,
        quantity: 3,
      },
    ],
    new Date('2021-03-01')
  );

  const placeOrder = new PlaceOrder(new ItemRepositoryMemory(), new OrderRepositoryMemory());
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(6090);
  expect(output.code).toBe('202100000001');
});
