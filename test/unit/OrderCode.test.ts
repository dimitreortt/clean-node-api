import OrderCode from '../../src/domain/entities/OrderCode';

test('Deve criar o código de um pedido', () => {
  const date = new Date('2021-03-01');
  const sequence = 1;
  const code = new OrderCode(date, sequence);
  expect(code.value).toBe('202100000001');
});
