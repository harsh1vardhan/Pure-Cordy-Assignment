import React from "react";

const sizes = {
  xs: "text-[5px] font-normal",
  lg: "text-sm font-normal leading-[17px]",
  s: "text-[9px] font-normal leading-[13px]",
  "2xl": "text-2xl font-medium leading-[30px]",
  xl: "text-base font-medium leading-5",
  md: "text-[11px] font-normal leading-[14px]",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
