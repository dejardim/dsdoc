import React from "react";

type NavProps = {
  children?: React.ReactNode
}

export const PseudoNavBar: React.FC<NavProps> = (props) => {
  return (
    <nav className="flex w-full h-12 mb-8 bg-[#D9D9D9] justify-between items-center p-1.5 sticky top-0 z-10">
      <span className="text-2xl font-bold">DSDoc</span>
      {props?.children}
    </nav>
  );
};
