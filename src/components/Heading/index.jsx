import React from "react";

const sizes = {
  xl: "text-[44px] font-semibold leading-[52px]",
  s: "text-[19px] font-bold leading-6",
  md: "text-xl font-semibold leading-[25px]",
  xs: "text-[13px] font-semibold leading-[17px]",
  lg: "text-[25px] font-semibold leading-[30px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
