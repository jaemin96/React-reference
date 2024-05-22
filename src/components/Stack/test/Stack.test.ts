import { Stack } from '../Stack';

describe('Stack', () => {
  let stack: Stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('Stack is empty', () => {
    expect(stack.isStackEmpty()).toBe(true);
  });

  it('Item pushed in stack', () => {
    stack.push(3);
    stack.push(5);

    expect(stack.isStackEmpty()).toBe(false);
    expect(stack.getStackItems()).toEqual([3, 5]);
  });

  it('should throw an error when popping from an empty stack', () => {
    expect(() => stack.pop()).toThrowError('Stack is empty');
  });

  it('should success when popping from an stack', () => {
    stack.push(3);
    stack.push(5);

    expect(stack.isStackEmpty()).toBe(false);
    expect(stack.getLength()).toBe(2);
    expect(stack.getStackItems()).toEqual([3, 5]);

    expect(stack.pop()).toBe(5);
    expect(stack.getLength()).toBe(1);
    expect(stack.getStackItems()).toEqual([3]);
  });
});
