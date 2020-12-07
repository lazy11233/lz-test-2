import React from 'react'
import {scopedClassMaker} from '../classes';

const sc = scopedClassMaker('lui-layout')

interface IProps extends React.HtmlHTMLAttributes<HTMLElement> {

}

const Header: React.FunctionComponent<IProps> = props => {
  const {className, ...restProps} = props
  return <div className={sc('header', {extra: className})} {...restProps}>header</div>
}

export default Header