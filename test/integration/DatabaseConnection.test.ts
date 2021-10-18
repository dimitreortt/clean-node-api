import DatabaseConnectionAdapter from '../../src/infra/database/DatabaseConnectionAdapter';

test.skip('Deve criar uma conexão com o banco de dados', async () => {
  const databaseConnection = new DatabaseConnectionAdapter();
  const items = await databaseConnection.getDocs('items');
  expect(items).toHaveLength(1);
});
