import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { GenerateButton } from "../../components/GenerateButton";
import { PseudoNavBar } from "../../components/PseudoNavBar";
import { Content } from "../../components/Content";
import { PersonalizationItems } from "../../components/PersonalizationItems";

export const Personalization: React.FC = () => {
  const location = useLocation()
  const { state } = location;
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

  return (
    <>
      <PseudoNavBar>
        <GenerateButton apiKey={state?.apiKey} options={options} componentName={state?.componentName} addOptions={addOptions} />
      </PseudoNavBar>

      <div className="mx-auto mb-8" style={{maxWidth: '1280px'}}>
        <Content>
          <h2 className="font-bold text-xl my-8">Personalization</h2>
        </Content>

        <PersonalizationItems options={options} addOptions={addOptions} changeOptions={changeOptions} changeAddOptions={changeAddOptions} />
      </div>
    </>
  );
};

