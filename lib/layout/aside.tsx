import React from 'react'
import {scopedClassMaker} from '../classes'

const sc = scopedClassMaker('lui-layout')

interface IProps extends React.HTMLAttributes<HTMLElement> {

}

const Aside: React.FunctionComponent<IProps> = props => {
  const {className, ...restProps} = props
  return <div className={sc('aside', {extra: className})} {...restProps}>x</div>
}

export default Aside