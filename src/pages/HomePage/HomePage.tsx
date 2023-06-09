import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Content } from "../../components/Content";
import { Divider } from "../../components/Divider";
import { Input } from "../../components/Input";
import { PseudoNavBar } from "../../components/PseudoNavBar";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ apiKey: '', componentName: '', componentCode: '' });

  const changeComponent = (itemKey: string, itemValue: string) => {
    setInfo(state => ({ ...state, [itemKey]: itemValue }));
  }

  const handleFile = (e:ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      const filename = files[0].name;
      const extension = filename.substring(filename.lastIndexOf('.') + 1);
      const extensionsSupport = ['vue', 'js', 'jsx', 'ts', 'tsx'];

      if (extensionsSupport.includes(extension)) {
        const reader = new FileReader();
  
        reader.onload = async (e) => {
          const text: string = (e.target?.result || '') as string;
  
          setInfo(state => ({ ...state, componentCode: text  }));
        }
        
        reader.readAsText(files[0]);
      } else {
        toast.error('File not supported', { theme: "dark" });
      }

    }
  }

  const next = () => {
    navigate("/personalization", { state: info });
  }

  return (
    <>
      <PseudoNavBar>
        <button onClick={next} className="bg-[#1E1E1E] p-1.5 font-semibold rounded-lg text-white disabled:opacity-50" disabled={info.componentName === '' || info.apiKey === ''}>Continue</button>
      </PseudoNavBar>

      <div className="mx-auto" style={{maxWidth: '1280px'}}>
        <Content>
          <h1 className="font-bold text-3xl mb-3">Design System Documentation</h1>
          <p className="font-normal text-base">Select components, create a personalized documentation and simplify your library maintenance</p>
        </Content>

        <Divider />

        <Content>
          <p className="font-bold text-base mb-4 text-[#1E1E1E]">Enter your OpenAI API key:</p>
          <Input changeComponent={changeComponent} name="apiKey" inputType="password" placeholder="api key" />
        </Content>

        <Divider />

        <Content>
          <p className="font-bold text-base mb-4 text-[#1E1E1E]">Which component do you want to generate documentation for?</p>
          <Input changeComponent={changeComponent} name="componentName" placeholder="e.g.: button, accordion, etc" />
        </Content>
        
        <br />

        <Content>
          <p className="font-bold text-base mb-2 text-[#1E1E1E]">You may provide the used code in your component:</p>
          <input type="file" name="componentCode" onChange={handleFile} />
        </Content>
      </div>
  </>
  );
};
