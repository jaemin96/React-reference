export function fetchProduct(error: string) {
  if (error === 'error') {
    return Promise.reject('error!');
  }
  return Promise.resolve({ item: 'juice', price: 500 });
}
