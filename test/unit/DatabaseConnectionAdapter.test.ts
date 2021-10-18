import DatabaseConnectionAdapter from '../../src/infra/database/DatabaseConnectionAdapter';

test('Deve buscar um item pelo id no banco de dados', async () => {
  const db = new DatabaseConnectionAdapter();
  const itemId = 1;
  const [item] = await db.getByField('items', 'id', itemId);
  const expectedObject = {
    category: 'Instrumentos Musicais',
    description: 'Amplificador',
    id: 1,
    price: '5000',
  };
  expect(item).toEqual(expectedObject);
});
