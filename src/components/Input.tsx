import React from "react";

export const Input: React.FC<InputProps> = ({placeholder, changeComponent}) => {
  return (
    <div className="w-full">
      <input 
        className="h-12 w-full py-2 pl-4 pr-12 rounded-sm focus:outline-none placeholder-[#B7B7B7] bg-[#F6F6F6]" 
        type="text" 
        placeholder={placeholder}
        onChange={e => changeComponent(e.target.value)}
      />
    </div>
  );
};

interface InputProps {
    placeholder: string;
    changeComponent: (itemValue: string) => void;
}