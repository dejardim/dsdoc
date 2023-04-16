import axios from "axios";
import { additionalOptions, options } from "../interfaces/options.interfaces";

const props = {
    whentouse: "when to use",
    anatomy: "anatomy",
    placement: "placement",
    content: "content",
    behavior: "behavior",
    states: "states",
    interactions: "interactions",
};

const generatePrompt = (component: string, options: options, addOptions: additionalOptions) => {
    let prompt = `Write a design system component documentation for the ${component} component. describe following points:`;

    type ObjectKey = keyof typeof options;

    const arr = Object.entries(props).filter(([key, value]) => options[key as ObjectKey]);
    const personalizationArr = arr.map(([key, value]) => value);

    prompt = `${prompt} ${personalizationArr.join(', ')}.`;

    const nLinks = parseInt(addOptions.links as string);

    if (!isNaN(nLinks) && nLinks > 0) {
        prompt = `${prompt} Add ${nLinks} links for best practices of this component.`;
    }

    if (addOptions.interactivestates) {
        prompt = `${prompt} Add a table with the interactive states (default, hover, active, focus, disabled) of the component and describe: element, state, property and color token.`;
    }

    if (addOptions.fontconfig) {
        prompt = `${prompt} Add a table with the title and content of the component and describe: element, font size in px and rem, font weight and type token.`;
    }

    if (addOptions.sizevariation) {
        prompt = `${prompt} Add a table with 3 size variations of the component with the sizes S, M, and L and describe the height in px and rem.`;
    }

    if (addOptions.bestpractices) {
        prompt = `${prompt} Add a text about the best practices for accessibility for this component.`;
    }

    if (addOptions.codeexamples) {
        prompt = `${prompt} Add code examples for the implementation of this component.`;
    }

    prompt = `${prompt} Format the response in markdown.`;

    return prompt;
}

export default async function generateDoc(apikey: string, component: string, options: options, additionalOptions: additionalOptions) {
    const prompt = generatePrompt(component, options, additionalOptions);

    const body = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ]
    };
    
    const response = await axios.post('https://api.openai.com/v1/chat/completions', body, {
        headers: {
            Authorization: `Bearer ${apikey}`
        }
    });

    const { data } = response;

    const { message } = data.choices[0]

    return message;
}