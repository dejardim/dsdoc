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
    console.log(response);
    navigate("/app", { state: response });
    /*
    * this.props.history.push({ pathname: '/app', state: response })
    * const {state} = this.props.location
    */
  }

  return (
    <>
      <div className="mx-2">
        <div className="mt-4 border-t" style={{ borderColor: "#BEBEBE" }} />
      </div>
      <div className="mx-2 mt-4 mb-2">
        <button onClick={generate} className="bg-[#1E1E1E] h-12 w-full rounded-sm text-white font-semibold" disabled={props.componentName === ''}>
          { !loading ? "Generate" : "" }
          <ClipLoader color="#ffffff" loading={loading} />
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