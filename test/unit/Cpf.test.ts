import { CPF } from '../../src/domain/entities/Cpf';

test('Deve validar um cpf', () => {
  const cpf = new CPF('034.953.971-59');
  expect(cpf).toBeDefined();
});

test('Não deve validar um cpf inválido', () => {
  expect(() => new CPF('111.111.111-11')).toThrow(new Error('Invalid cpf'));
});
