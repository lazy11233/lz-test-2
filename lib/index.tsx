import React from 'react';
import ReactDOM from 'react-dom';

import Icon from './icon';

const fn: React.MouseEventHandler = (e: React.MouseEvent) => {
  console.log('fn', e);
}

ReactDOM.render((
  <div>
    <Icon name="wechat" onClick={fn} />
  </div>), document.getElementById('root'));