import { scopedClassMaker } from '../classes';

describe('classes', () => {
  it('接受字符串', () => {
    const sc = scopedClassMaker('lui');
    expect(sc('')).toEqual('lui');
    expect(sc('test')).toEqual('lui-test');
  });
  it('接受对象', () => {
    const sc = scopedClassMaker('lui');
    expect(sc({ x: true, y: true })).toEqual('lui-x lui-y');
    expect(sc({ x: true, y: false })).toEqual('lui-x');
    expect(sc({ x: false, y: false })).toEqual('lui');
    expect(sc({ x: false, y: false }, { extra: 'my-lui' })).toEqual('my-lui');
  });
});
