import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { Divider } from "./Divider";
import { Content } from "./Content";

export const PersonalizationItems: React.FC = () => {
  const [whenToUse, setWheToUse] = useState(false);
  const [anatomy, setAnatomy] = useState(false);
  const [placement, setPlacement] = useState(false);
  const [content, setContent] = useState(false);

  const [behavior, setBehavior] = useState(false);
  const [states, setStates] = useState(false);
  const [interactions, setInteractions] = useState(false);

  const items = [
    {
      name: "When to use",
      value:
        "Specify the appropriate scenarios or contexts in which the component should be used.",
      state: whenToUse,
      setState: setWheToUse,
    },
    {
      name: "Anatomy",
      value:
        "Structural composition and elements of a design component or element.",
      state: anatomy,
      setState: setAnatomy,
    },
    {
      name: "Placement",
      value:
        "Suggest the position of the components based on hierarchy, proximity, and alignment within the interface.",
      state: placement,
      setState: setPlacement,
    },
    {
      name: "Content",
      value:
        "Type, format, and placement of content within a design component.",
      state: content,
      setState: setContent,
    },
  ];

  const behaviorItems = [
    {
      name: "States",
      value:
        "Different visual states or variations of a design component or element, such as hover or active states.",
      state: states,
      setState: setStates,
    },
    {
      name: "Interactions",
      value:
        "Ways in which users can interact with a design component, such as through clicking, scrolling, or dragging.",
      state: interactions,
      setState: setInteractions,
    },
  ];

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <Content>
            <div className="w-full flex justify-between">
              <div className="w-4/5">
                <p className="font-medium text-xl mb-2 text-[#1E1E1E]">
                  {item.name}
                </p>
                <p className="text-sm text-[#7C7C7C]">{item.value}</p>
              </div>
              <div className="w-1/5 flex justify-end">
                <Switch
                  checked={item.state}
                  onChange={item.setState}
                  className={`${
                    item.state ? "bg-blue-600" : "bg-gray-200"
                  } relative inline-flex h-7 w-12 items-center rounded-full`}
                >
                  <span className="sr-only">Enable {item.name}</span>
                  <span
                    className={`${
                      item.state ? "translate-x-7" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
            </div>
          </Content>
          <Divider />
        </div>
      ))}

      <Content>
        <div className="w-full flex justify-between">
          <div className="w-4/5">
            <p className="font-medium text-xl mb-2 text-[#1E1E1E]">Behavior</p>
            <p className="text-sm text-[#7C7C7C]">
              Expected functionality and actions of a design component or
              element when interacted with by the user.
            </p>
          </div>
          <div className="w-1/5 flex justify-end">
            <Switch
              checked={behavior}
              onChange={setBehavior}
              className={`${
                behavior ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex h-7 w-12 items-center rounded-full`}
            >
              <span className="sr-only">Enable Behavior</span>
              <span
                className={`${
                  behavior ? "translate-x-7" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
        </div>
        {behavior && (
          <div className="w-full rounded-lg mt-4 pt-5 bg-[#FAFAFA]">
            <Content>
              {behaviorItems.map((item, index) => (
                <div key={index}>
                  <Content>
                    <div className="w-full flex justify-between pb-6">
                      <div className="w-4/5">
                        <p className="font-medium text-xl mb-2 text-[#1E1E1E]">
                          {item.name}
                        </p>
                        <p className="text-sm text-[#7C7C7C]">{item.value}</p>
                      </div>
                      <div className="w-1/5 flex justify-end">
                        <Switch
                          checked={item.state}
                          onChange={item.setState}
                          className={`${
                            item.state ? "bg-blue-600" : "bg-gray-200"
                          } relative inline-flex h-7 w-12 items-center rounded-full`}
                        >
                          <span className="sr-only">Enable {item.name}</span>
                          <span
                            className={`${
                              item.state ? "translate-x-7" : "translate-x-1"
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                          />
                        </Switch>
                      </div>
                    </div>
                  </Content>
                </div>
              ))}
            </Content>
          </div>
        )}
      </Content>
    </>
  );
};
