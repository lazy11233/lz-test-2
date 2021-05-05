import React, { ButtonHTMLAttributes } from 'react';
import { scopedClassMaker } from '../../helpers/classes';
const sc = scopedClassMaker('lui-button');
import './button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'important' | 'dangerous' | 'normal';
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, level = 'normal', ...restProps } = props;
  return (
    <button className={`${sc(className)} ${sc(level)}`} {...restProps}>
      {props.children}
    </button>
  );
};

export default Button;
