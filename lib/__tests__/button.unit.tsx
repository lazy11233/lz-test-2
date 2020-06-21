import React from 'react';
import TestRenderer from 'react-test-renderer';

import Button from '../button';

describe('button', () => {
  it('是个div', () => {
    const json = TestRenderer.create(<Button />).toJSON();
    expect(json).toMatchInlineSnapshot(`
      <div>
        hello World
      </div>
    `);
  });
});
