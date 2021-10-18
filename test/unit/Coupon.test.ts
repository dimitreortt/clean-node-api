import { Coupon } from '../../src/domain/entities/Coupon';

test('Deve criar um cupom de desconto válido', () => {
  const coupon = new Coupon('VALE20', 20, new Date('2021-10-10'));
  const isExpired = coupon.isExpired(new Date('2021-09-10'));
  expect(isExpired).toBeFalsy();
});

test('Deve criar um cupom de desconto inválido', () => {
  const coupon = new Coupon('VALE20', 20, new Date('2021-09-10'));
  const isExpired = coupon.isExpired(new Date('2021-10-10'));
  expect(isExpired).toBeTruthy();
});

test('Deve criar um cupom de desconto que não expira nunca', () => {
  const coupon = new Coupon('VALE20', 20);
  const isExpired = coupon.isExpired(new Date('2021-10-10'));
  expect(isExpired).toBeFalsy();
});
