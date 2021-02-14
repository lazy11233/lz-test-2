import React, { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '../index';
import { scopedClassMaker } from '../../helpers/classes';
import './dialog.scss';

interface Props {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
  footers?: Array<ReactElement>;
  okText?: string;
  cancelText?: string;
  onOk?: React.MouseEventHandler
  onCancel?: React.MouseEventHandler
  closeOnClickMask?: boolean
}

const scopedClass = scopedClassMaker('lui-dialog');

const Dialog: React.FunctionComponent<Props> = props => {
  const { visible, footers, okText, cancelText, title, children, onOk, onCancel, onClose, closeOnClickMask } = props;
  const handleOk: React.MouseEventHandler = (e) => {
    onOk && onOk(e);
    onClose();
  };
  const handleCancel: React.MouseEventHandler = (e) => {
    onCancel && onCancel(e);
    onClose();
  };
  const handleClose: React.MouseEventHandler = () => {
    onClose();
  };
  const handleMaskClick: React.MouseEventHandler = () => {
    closeOnClickMask && onClose();
  };
  const result = (visible &&
    <Fragment>
      <div className={scopedClass('mask')} onClick={handleMaskClick} />
      <div className={scopedClass()}>
        <div className={scopedClass('close')} onClick={handleClose}>
          <Icon name='close' />
        </div>
        <div className={scopedClass('header')}>{title}</div>
        <div className={scopedClass('main')}>{children}</div>
        {footers && footers.length > 0 ?
          (<div className={scopedClass('footer')}>
            {footers.map((footer, index) =>
              React.cloneElement(footer, { key: index })
            )}
          </div>) :
          (<div className={scopedClass('footer')}>
            <button onClick={handleOk}>{okText}</button>
            <button onClick={handleCancel}>{cancelText}</button>
          </div>)}
      </div>
    </Fragment>
  );
  return ReactDOM.createPortal(result, document.body);
};

Dialog.defaultProps = {
  title: '提示',
  okText: '确定',
  cancelText: '取消',
  closeOnClickMask: false
};

const modal = (content: React.ReactNode, buttons?: Array<React.ReactElement>, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        close();
        afterClose && afterClose();
      }}
      footers={buttons}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: React.ReactNode) => {
  const button = <button onClick={() => {close();}}>确定</button>;
  const close = modal(content, [button]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ];
  const close = modal(content, buttons, no);
};

export { alert, modal, confirm };
export default Dialog;