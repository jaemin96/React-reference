import { fetchProduct } from './PromiseExam';

describe('Promise test', () => {
  it('Promise rejected - props error text ("error")', () => {
    expect(fetchProduct('error')).rejects.toBe('error!');
  });

  it('Promise fulfilled by return', () => {
    const product = {
      item: 'juice',
      price: 500,
    };

    return fetchProduct('abc').then((item) => {
      expect(item).toEqual(product);
    });
  });

  it('Promise fulfilled by async-await', async () => {
    const product = await fetchProduct('abc');

    expect(product).toEqual({ item: 'juice', price: 500 });
  });

  it('Promise fulfilled by resolve', () => {
    expect(fetchProduct('abc')).resolves.toEqual({ item: 'juice', price: 500 });
  });
});
