import React, { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useLocation } from "react-router-dom";
import { Content } from "../../components/Content";

export const App: React.FC = () => {
  const location = useLocation()
  const { state } = location;
  const [docs, setDocs] = useState(state?.content);

  return (
    <div className="mx-auto" style={{maxWidth: '1280px'}}>
      <Content>
        <MarkdownEditor value={docs} onChange={(value, viewUpdate) => setDocs(value)} visible={true} />
      </Content>
    </div>
  );
};