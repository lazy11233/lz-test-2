import React from "react";
import { scopedClassMaker } from "../../helpers/classes";

const sc = scopedClassMaker("lui-layout");

interface IProps extends React.HTMLAttributes<HTMLElement> {}

const Aside: React.FunctionComponent<IProps> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <div className={sc("aside", { extra: className })} {...restProps}>
      {children}
    </div>
  );
};

export default Aside;
