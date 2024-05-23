export class Stack {
  private top: number;
  private st: any[];

  constructor() {
    this.top = 0;
    this.st = [];
  }

  // push
  push(item: any) {
    this.st[this.top] = item;
    this.top++;
  }

  // pop
  pop() {
    if (!this.isStackEmpty()) {
      this.top--;
      return this.st.pop();
    } else {
      throw new Error('Stack is empty');
    }
  }

  // getItems
  getStackItems() {
    return this.st;
  }

  // getLength
  getLength() {
    return this.st.length;
  }

  // isEmpty
  isStackEmpty() {
    return this.st.length === 0;
  }
}
