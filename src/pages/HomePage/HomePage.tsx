import React, { useState } from "react";
import { Content } from "../../components/Content";
import { Divider } from "../../components/Divider";
import { GenerateButton } from "../../components/GenerateButton";
import { Input } from "../../components/Input";
import { PersonalizationItems } from "../../components/PersonalizationItems";
import { PseudoNavBar } from "../../components/PseudoNavBar";

export const Home: React.FC = () => {
  const [componentName, setComponentName] = useState('');
  const [options, setOptions] = useState({ whentouse: false, anatomy: false, placement: false, content: false, behavior: false, states: false, interactions: false });
  const [addOptions, setAddOptions] = useState({ links: '0', interactivestates: false, fontconfig: false, sizevariation: false, bestpractices: false, codeexamples: false });

  const changeOptions = (itemName: string, itemValue: boolean) => {
    if (itemName === "behavior" && !itemValue) {
      setOptions(state => ({ ...state, [itemName]: itemValue, "states": false, "interactions": false }));
    } else {
      setOptions(state => ({ ...state, [itemName]: itemValue }));
    }
  }

  const changeAddOptions = (itemName: string, itemValue: boolean|string) => {
    setAddOptions(state => ({ ...state, [itemName]: itemValue }));
  }

  const changeComponent = (itemValue: string) => {
    setComponentName(itemValue);
  }

  return (
    <>
      <PseudoNavBar>
        <GenerateButton options={options} componentName={componentName} addOptions={addOptions} />
      </PseudoNavBar>

      <div className="mx-auto" style={{maxWidth: '1280px'}}>
        <Content>
          <h1 className="font-bold text-3xl mb-3">Design System Documentation</h1>
          <p className="font-normal text-base">Select components, create a personalized documentation and simplify your library maintenance</p>
        </Content>

        <Divider />

        <Content>
          <p className="font-bold text-base mb-4 text-[#1E1E1E]">Which component do you want to generate documentation?</p>
          <Input changeComponent={changeComponent} placeholder="e.g.: button, accordion, etc" />
        </Content>

        <Content>
          <h2 className="font-bold text-xl my-8">Personalization</h2>
        </Content>

        <PersonalizationItems options={options} addOptions={addOptions} changeOptions={changeOptions} changeAddOptions={changeAddOptions} />
      </div>
  </>
  );
};
