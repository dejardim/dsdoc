import React from "react";
import generateDoc from "../services/openai";
import { additionalOptions, options } from "../interfaces/options.interfaces";

export const GenerateButton: React.FC<buttonProps> = (props) => {
  const generate = async () => {
    const response = await generateDoc(props.componentName, props.options, props.addOptions);

    console.log(response);
  }

  return (
    <>
      <div className="mx-2">
        <div className="mt-4 border-t" style={{ borderColor: "#BEBEBE" }} />
      </div>
      <div className="mx-2 mt-4 mb-2">
        <button onClick={generate} className="bg-[#1E1E1E] h-12 w-full rounded-sm text-white font-semibold" disabled={props.componentName === ''}>
          Generate
        </button>
      </div>
    </>
  );
};

interface buttonProps {
  options: options;
  componentName: string;
  addOptions: additionalOptions
}