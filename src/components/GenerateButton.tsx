import React, { useState } from "react";
import generateDoc from "../services/openai";
import { additionalOptions, options } from "../interfaces/options.interfaces";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export const GenerateButton: React.FC<buttonProps> = (props) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(!loading);
    
    const response = await generateDoc(props.componentName, props.options, props.addOptions);
    
    setLoading(!loading);
    navigate("/app", { state: response });
    /*
    * this.props.history.push({ pathname: '/app', state: response })
    * const {state} = this.props.location
    */
  }

  return (
    <button onClick={generate} className="bg-[#1E1E1E] rounded-lg text-white font-semibold p-1.5 flex items-center" disabled={props.componentName === ''}>
      { !loading ? "Generate" : "" }
      <ClipLoader size={30} color="#ffffff" loading={loading} />
    </button>
  );
};

interface buttonProps {
  options: options;
  componentName: string;
  addOptions: additionalOptions
}