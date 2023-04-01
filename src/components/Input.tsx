import React from "react";

export const Input: React.FC<InputProps> = ({placeholder}) => {
  return (
    <div className="w-full">
      <input 
        className="h-12 w-full py-2 pl-4 pr-12 rounded-sm focus:outline-none placeholder-[#B7B7B7] bg-[#F6F6F6]" 
        type="text" 
        placeholder={placeholder} 
      />
    </div>
  );
};

interface InputProps {
    placeholder: string;
}