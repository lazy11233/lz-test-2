import React from 'react'
import {scopedClassMaker} from '../classes'

const sc = scopedClassMaker('lui-layout')

interface IProps extends React.HtmlHTMLAttributes<HTMLElement> {

}

const Content: React.FunctionComponent<IProps> = props => {
  const {className, ...restProps} = props
  return <div className={sc('content', {extra: className})} {...restProps}>content</div>
}

export default Content