import React from "react";

interface HamburgerButtonProps {
  clicked: () => void;
}

export const Button: React.FC<HamburgerButtonProps> = ({ clicked }) => {
  return (
    <div className="h-[20px] w-[26px] flex flex-col justify-between cursor-pointer md:hidden" onClick={clicked}>
      <div className="h-[3px] w-full bg-foreground rounded-full"></div>
      <div className="h-[3px] w-full bg-foreground rounded-full"></div>
      <div className="h-[3px] w-full bg-foreground rounded-full"></div>
    </div>
  );
};
