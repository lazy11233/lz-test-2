import React from 'react'
import {scopedClassMaker} from '../classes';

const sc = scopedClassMaker('lui-layout')

interface IProps extends React.HtmlHTMLAttributes<HTMLElement> {

}

const Footer: React.FunctionComponent<IProps> = props => {
  const {className, ...restProps} = props
  return <div className={sc('footer', {extra: className})} {...restProps}>footer</div>
}

export default Footer