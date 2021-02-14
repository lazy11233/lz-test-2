import React from "react";
import { scopedClassMaker } from "../../helpers/classes";

const sc = scopedClassMaker("lui-layout");

interface IProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<IProps> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <div className={sc("footer", { extra: className })} {...restProps}>
      {children}
    </div>
  );
};

export default Footer;
