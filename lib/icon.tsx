import React from 'react';

import './importIcons';
import './icon.scss';
import classes from '../helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  const { className, ...restPorps } = props;

  return (
    <svg className={classes('fui-icon', className)} {...restPorps} >
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;