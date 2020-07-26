import React, { useState } from 'react';
import Dialog, { alert, modal, confirm } from './dialog';

const DialogExample = () => {
  const [visible1, setVisible1] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);
  const handleOk: React.MouseEventHandler = (e) => {
    console.log('ok');
  };
  const handleCancel: React.MouseEventHandler = (e) => {
    console.log('cancel');
  };
  return (
    <div>
      <div>
        <h2>基本</h2>
        <button
          onClick={() => {setVisible1(true);}}
        >open Dialog
        </button>
        <Dialog
          visible={visible1}
          title='Basic Dialog'
          onOk={handleOk}
          onCancel={handleCancel}
          onClose={() => {setVisible1(false);}}
          closeOnClickMask
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Dialog>
      </div>
      <div>
        <h2>自定义按钮</h2>
        <button onClick={() => {setVisible2(true);}}
        >open dialog with customized footer
        </button>
        <Dialog
          visible={visible2}
          title='open dialog with customized footer'
          onOk={handleOk}
          onCancel={handleCancel}
          onClose={() => {setVisible2(false);}}
          closeOnClickMask
          footers={[
            <button onClick={() => {setVisible2(false);}}>自定义确定</button>,
            <button onClick={() => {setVisible2(false);}}>自定义取消</button>
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Dialog>
      </div>
      <div>
        <h2>alert</h2>
        <button onClick={() => {
          alert('hi');
        }}>alert
        </button>
        <button onClick={() => {
          modal('hi modal', [<button>确定</button>], () => {
            console.log('close');
          });
        }}>modal
        </button>
        <button onClick={() => {
          confirm('hi')
        }}>confirm
        </button>
      </div>
    </div>
  );
};

export default DialogExample;