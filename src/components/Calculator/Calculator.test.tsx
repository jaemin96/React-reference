import { Calc } from './Calc';

interface CalcType {
  value: number;
  set: (n: number) => void;
  clear: () => void;
  sum: (n: number) => void;
  subtract: (n: number) => void;
  multiply: (n: number) => void;
  divide: (n: number) => void;
}

describe('Calculator Testing', () => {
  let calc: CalcType;
  beforeEach(() => {
    calc = new Calc();
  });

  it('init', () => {
    expect(calc.value).toBe(0);
  });

  it('Set Value', () => {
    calc.set(5);
    expect(calc.value).toBe(5);
  });

  it('Clear - set value 0', () => {
    calc.clear();
    expect(calc.value).toBe(0);
  });

  it('Sum', () => {
    calc.set(6);
    calc.sum(7);
    expect(calc.value).toBe(13);
  });

  it('Subtract', () => {
    calc.set(11);
    calc.subtract(3);
    expect(calc.value).toBe(8);
  });

  it('Multiply', () => {
    calc.set(6);
    calc.multiply(3);
    expect(calc.value).toBe(18);
  });

  describe('Divide', () => {
    it('divide by 0', () => {
      expect(() => calc.divide(0)).toThrow('0으로 나누면 안돼요~');
    });

    it('divide by not 0', () => {
      calc.set(9);
      calc.divide(3);
      expect(calc.value).toBe(3);
    });
  });
});
