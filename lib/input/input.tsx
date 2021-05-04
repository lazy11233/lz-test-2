import React, { InputHTMLAttributes } from 'react';
import { scopedClassMaker } from '../../helpers/classes';
import './input.scss';

const sc = scopedClassMaker('lui-input');

interface Props extends InputHTMLAttributes<HTMLInputElement> {}
const Input: React.FunctionComponent<Props> = (props) => {
  const {className, ...restProps} = props;
  return <input className={sc(className)} {...restProps} />;
};

export default Input;
