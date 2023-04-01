import React from "react";
import { Content } from "../../components/Content";
import { Divider } from "../../components/Divider";
import { GenerateButton } from "../../components/GenerateButton";
import { Input } from "../../components/Input";
import { PersonalizationItems } from "../../components/PersonalizationItems";
import { PseudoNavBar } from "../../components/PseudoNavBar";

export const Home: React.FC = () => {
  return (
    <>
      <PseudoNavBar />

      <div className="mx-auto" style={{maxWidth: '1280px'}}>
        <Content>
          <h1 className="font-bold text-3xl mb-3">Design System Documentation</h1>
          <p className="font-normal text-base">Select components, create a personalized documentation and simplify your library maintenance</p>
        </Content>

        <Divider />

        <Content>
          <p className="font-bold text-base mb-4 text-[#1E1E1E]">Which component do you want to generate documentation?</p>
          <Input placeholder="e.g.: button, accordion, etc" />
        </Content>

        <Content>
          <h2 className="font-bold text-xl my-8">Personalization</h2>
        </Content>

        <PersonalizationItems />

        <GenerateButton />
      </div>
  </>
  );
};
