import { Order } from '../../src/domain/entities/Order';
import { Item } from '../../src/domain/entities/Item';
import { Coupon } from '../../src/domain/entities/Coupon';

test('Não deve criar pedido com cpf inválido', () => {
  expect(() => new Order('111.111.111-11')).toThrow(new Error('Invalid cpf'));
});

test('Deve criar um pedido', () => {
  const order = new Order('517.026.470-48');
  expect(order).toBeDefined();
});

test('Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)', () => {
  const order = new Order('517.026.470-48');
  order.addItem(new Item(1, 'Castanha de Cajú', 'Oleaginosas', 100, 10, 5, 8), 1);
  order.addItem(new Item(2, 'Semente de Girassol', 'Sementes', 55, 10, 5, 8), 1);
  order.addItem(new Item(3, 'Grão de Bico', 'Leguminosas', 11, 10, 5, 8), 2);
  const total = order.getTotal();
  expect(total).toBe(177);
});

test('Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)', () => {
  const order = new Order('517.026.470-48');
  order.addItem(new Item(1, 'Castanha de Cajú', 'Oleaginosas', 100, 10, 5, 8), 1);
  order.addItem(new Item(2, 'Semente de Girassol', 'Sementes', 55, 10, 5, 8), 1);
  order.addItem(new Item(3, 'Grão de Bico', 'Leguminosas', 11, 10, 5, 8), 2);
  order.addCoupon(new Coupon('Vale 20', 20, new Date()));
  const total = order.getTotal();
  expect(total).toBe(141.6);
});

test('Deve criar um pedido com 3 itens com cupom de desconto expirado', () => {
  const order = new Order('517.026.470-48', new Date('2021-10-10'));
  order.addItem(new Item(1, 'Castanha de Cajú', 'Oleaginosas', 100, 10, 5, 8), 1);
  order.addItem(new Item(2, 'Semente de Girassol', 'Sementes', 55, 10, 5, 8), 1);
  order.addItem(new Item(3, 'Grão de Bico', 'Leguminosas', 11, 10, 5, 8), 2);

  order.addCoupon(new Coupon('Vale 20', 20, new Date('2021-03-01')));
  expect(order.getTotal()).toBe(177);
});

test('Deve calcular o valor do frete com base nas dimensões ', () => {
  const order = new Order('517.026.470-48', new Date('2021-10-10'));
  order.addItem(new Item(1, 'Instrumentos Musicais', 'Guitarra', 1000, 100, 30, 10, 3), 1);
  order.addItem(new Item(2, 'Instrumentos Musicais', 'Amplificador', 5000, 100, 50, 50, 20), 1);
  order.addItem(new Item(3, 'Instrumentos Musicais', 'Cabo', 30, 10, 10, 10, 0.9), 3);
  const freight = order.getFreight();
  expect(freight).toBe(260);
});

test('Deve calcular o valor do frete com base nas dimensões ', () => {
  const order = new Order('517.026.470-48', new Date('2021-10-10'));
  order.addItem(new Item(1, 'Instrumentos Musicais', 'Guitarra', 1000), 1);
  order.addItem(new Item(2, 'Instrumentos Musicais', 'Amplificador', 5000), 1);
  order.addItem(new Item(3, 'Instrumentos Musicais', 'Cabo', 30), 3);
  const code = order.code;
  expect(code.value).toBe('202100000001');
});
