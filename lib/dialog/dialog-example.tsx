import React, { useState } from 'react';
import Dialog from './dialog';

const DialogExample = () => {
  const [visible, setVisible] = useState<boolean>(true);
  return <div>
    <button onClick={() => setVisible(!visible)}>click</button>
    <Dialog visible={visible}>
      <strong>hi</strong>
    </Dialog>
  </div>;
};

export default DialogExample;