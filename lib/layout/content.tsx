import React from 'react';
import { scopedClassMaker } from '../../helpers/classes';

const sc = scopedClassMaker('lui-layout');

interface IProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<IProps> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <div className={sc('content', { extra: className })} {...restProps}>
      {children}
    </div>
  );
};

export default Content;
