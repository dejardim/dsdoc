import React from "react";
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useLocation } from "react-router-dom";
import { Content } from "../../components/Content";

export const App: React.FC = () => {
  const location = useLocation()
  const { state } = location;

  return (
    <div className="mx-auto" style={{maxWidth: '1280px'}}>
      <Content>
        <MarkdownPreview source={state?.content} />
      </Content>
    </div>
  );
};