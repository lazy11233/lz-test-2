function add(a: number, b: number): number {
  return a + b;
}

describe('第一个测试用例', () => {
  it('函数add', () => {
    expect(add(1, 2)).toEqual(3);
  });
});