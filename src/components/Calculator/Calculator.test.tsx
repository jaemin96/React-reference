import { Calc } from './Calc';

test('Calculator set test', () => {
  const calc = new Calc();

  // set test!
  calc.set(5);
  expect(calc.value).toBe(5);

  // clear test!
  calc.clear();
  expect(calc.value).toBe(0);

  // sum test!
  calc.set(3);
  calc.sum(6);
  expect(calc.value).toBe(9);

  // sub test!
  calc.subtract(2);
  expect(calc.value).toBe(7);

  // multiple test!
  calc.multiply(8);
  expect(calc.value).toBe(56);

  // divide test!
  // calc.divide(0);
  calc.divide(10);
  expect(calc.value).toBe(5.6);
});
