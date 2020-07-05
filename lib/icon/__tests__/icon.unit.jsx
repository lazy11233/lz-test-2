import React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Icon from '../icon';

describe('icon', () => {
  it('should ', () => {
    const json = TestRenderer.create(<Icon name="wechat" />).toJSON();
    expect(json).toMatchSnapshot();
  });
  it('onClick', () => {
    const fn = jest.fn();
    const alipayIcon = mount(<Icon name="alipay" onClick={fn} />);
    alipayIcon.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });
});