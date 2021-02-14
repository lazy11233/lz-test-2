import React from 'react';
import { scopedClassMaker } from '../../helpers/classes';
import './layout.scss';
import Aside from './aside';

const sc = scopedClassMaker('lui-layout');

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
  children: React.ReactElement | Array<React.ReactElement>;
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, children, ...restProps } = props;
  const childrenAsArray = children as Array<React.ReactElement>;
  const hasAside =
    'length' in childrenAsArray &&
    childrenAsArray.reduce(
      (result, node) => result || node.type === Aside,
      false
    );

  return (
    <div
      className={sc({ '': true, hasAside }, { extra: className })}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Layout;
