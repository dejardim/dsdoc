import React, { useState } from "react";
import generateDoc from "../services/openai";
import { additionalOptions, options } from "../interfaces/options.interfaces";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export const GenerateButton: React.FC<buttonProps> = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(!loading);
    
    try {
      const response = await generateDoc(props.apiKey, props.componentName, props.componentCode, props.options, props.addOptions);
      
      setLoading(!loading);
      navigate("/app", { state: response });
    } catch (err) {
      setLoading(false);
      toast.error('Something went wrong, please verify your api key and try again later.', { theme: "dark" });
    } 
  }

  return (
    <button onClick={generate} className="bg-[#1E1E1E] rounded-lg text-white font-semibold p-1.5 flex items-center disabled:opacity-50" disabled={props.componentName === ''}>
      { !loading ? "Generate" : "" }
      <ClipLoader size={30} color="#ffffff" loading={loading} />
    </button>
  );
};

interface buttonProps {
  apiKey: string;
  options: options;
  componentName: string;
  componentCode: string;
  addOptions: additionalOptions
}