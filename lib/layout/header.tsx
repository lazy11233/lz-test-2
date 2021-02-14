import React from 'react';
import { scopedClassMaker } from '../../helpers/classes';

const sc = scopedClassMaker('lui-layout');

interface IProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<IProps> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <div className={sc('header', { extra: className })} {...restProps}>
      {children}
    </div>
  );
};

export default Header;
