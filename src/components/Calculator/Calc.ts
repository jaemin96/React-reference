export class Calc {
  value: number;

  constructor() {
    this.value = 0;
  }

  // 수 입력
  set(n: number) {
    this.value = n;
  }

  // 수 초기화
  clear() {
    this.value = 0;
  }

  // 더하기
  sum(n: number) {
    this.value += n;
  }

  // 빼기
  subtract(n: number) {
    this.value -= n;
  }

  // 곱셈
  multiply(n: number) {
    this.value *= n;
  }

  // 나눗셈
  divide(n: number) {
    if (n === 0) {
      throw new Error('0으로 나누면 안돼요~');
    }

    this.value /= n;
  }
}
