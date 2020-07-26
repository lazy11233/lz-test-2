import React, { ReactChild, ReactFragment, ReactPortal, Fragment } from 'react';
import { Icon } from '../index';
import { scopedClassMaker } from '../classes';
import './dialog.scss';

interface Props {
  visible: boolean;
  children: ReactChild | ReactFragment | ReactPortal | boolean
}

const scopedClass = scopedClassMaker('lui-dialog');

const Dialog: React.FunctionComponent<Props> = props => {
  return (props.visible ?
      <Fragment>
        <div className={scopedClass('mask')} />
        <div className={scopedClass()}>
          <div className={scopedClass('close')}>
            <Icon name='close' />
          </div>
          <div className={scopedClass('header')}>
            提示
          </div>
          <div className={scopedClass('main')}>
            {props.children}
          </div>
          <div className={scopedClass('bottom')}>
            <button>ok</button>
            <button>cancel</button>
          </div>
        </div>

      </Fragment> : null
  );
};
export default Dialog;