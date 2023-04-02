import React from "react";
import { Switch } from "@headlessui/react";
import { Divider } from "./Divider";
import { Content } from "./Content";
import { additionalOptions, options } from "../interfaces/options.interfaces";

interface personalizationListProps {
  options: options;
  addOptions: additionalOptions;
  changeOptions: (itemName: string, itemValue: boolean) => void;
  changeAddOptions: (itemName: string, itemValue: boolean|string) => void;
}

export const PersonalizationItems: React.FC<personalizationListProps> = (props) => {

  const items = [
    {
      name: "When to use",
      prop: "whentouse",
      value:
        "Specify the appropriate scenarios or contexts in which the component should be used.",
      state: props.options.whentouse,
    },
    {
      name: "Anatomy",
      prop: "anatomy",
      value:
        "Structural composition and elements of a design component or element.",
      state: props.options.anatomy,
    },
    {
      name: "Placement",
      prop: "placement",
      value:
        "Suggest the position of the components based on hierarchy, proximity, and alignment within the interface.",
      state: props.options.placement,
    },
    {
      name: "Content",
      prop: "content",
      value:
        "Type, format, and placement of content within a design component.",
      state: props.options.content,
    },
  ];

  const behaviorItems = [
    {
      name: "States",
      prop: "states",
      value:
        "Different visual states or variations of a design component or element, such as hover or active states.",
      state: props.options.states,
    },
    {
      name: "Interactions",
      prop: "interactions",
      value:
        "Ways in which users can interact with a design component, such as through clicking, scrolling, or dragging.",
      state: props.options.interactions,
    },
  ];

  const additionalItems = [
    {
      name: "Interactive states table",
      prop: "interactivestates",
      value:
        "Describes the properties and colors for the component in different states of interaction.",
      state: props.addOptions.interactivestates,
    },
    {
      name: "Font styles table",
      prop: "fontconfig",
      value:
        "Describes the font style, size and weight for the component.",
      state: props.addOptions.fontconfig,
    },
    {
      name: "Size variation table",
      prop: "sizevariation",
      value:
        "Describes the height of the component in the S, M and L viewport sizes.",
      state: props.addOptions.sizevariation,
    },
    {
      name: "Best practices for accessibility",
      prop: "bestpractices",
      value:
        "Best pratices for accessibility for this component.",
      state: props.addOptions.bestpractices,
    },
    {
      name: "Code examples",
      prop: "codeexamples",
      value:
        "Examples of implementation for this component.",
      state: props.addOptions.codeexamples,
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
                  onChange={(e) => props.changeOptions(item.prop, e)}
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

      {additionalItems.map((item, index) => (
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
                  onChange={(e) => props.changeAddOptions(item.prop, e)}
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
            <p className="font-medium text-xl mb-2 text-[#1E1E1E]">
              Links for best practices
            </p>
            <p className="text-sm text-[#7C7C7C]">Useful links that tell the best practices of use of this component.</p>
          </div>
          <div className="w-1/5 flex justify-end">
            <input 
              className="h-12 w-full py-2 pl-4 pr-12 rounded-sm focus:outline-none placeholder-[#B7B7B7] bg-[#F6F6F6]" 
              type="number"
              value={props.addOptions.links} 
              onChange={e => props.changeAddOptions('links', e.target.value)}
            />
          </div>
        </div>
      </Content>
      <Divider />

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
              checked={props.options.behavior}
              onChange={(e) => props.changeOptions('behavior', e)}
              className={`${
                props.options.behavior ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex h-7 w-12 items-center rounded-full`}
            >
              <span className="sr-only">Enable Behavior</span>
              <span
                className={`${
                  props.options.behavior ? "translate-x-7" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
        </div>
        {props.options.behavior && (
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
                          onChange={(e) => props.changeOptions(item.prop, e)}
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
