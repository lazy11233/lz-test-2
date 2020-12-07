import React from 'react'
import {scopedClassMaker} from '../classes'
import './layout.scss'

const sc = scopedClassMaker('lui-layout')

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {

}

const Layout: React.FunctionComponent<Props> = props => {
  const {className, ...restProps} = props
  return (
    <div className={sc('', {extra: className})} {...restProps}>
      {props.children}
    </div>
  )
}

export default Layout