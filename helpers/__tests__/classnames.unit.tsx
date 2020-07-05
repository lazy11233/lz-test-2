import classes from '../classnames';

describe('classes', () => {
  it('接受一个 className', function () {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接受两个 className', function () {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('输入中含有 undefined', function () {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });
  it('含有中文', function () {
    const result = classes('a', '中文', undefined, null);
    expect(result).toEqual('a 中文');
  });
});