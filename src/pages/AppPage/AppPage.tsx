import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import MarkdownEditor from "@uiw/react-markdown-editor";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Content } from "../../components/Content";
import { PseudoNavBar } from "../../components/PseudoNavBar";

export const App: React.FC = () => {
  const location = useLocation()
  const { state } = location;
  const [docs, setDocs] = useState(state?.content);
  const [copied, setCopied] = useState(false);

  const copyTransition = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <>
      <PseudoNavBar>
        <CopyToClipboard text={docs} onCopy={copyTransition}>
          <button className="bg-[#1E1E1E] p-1.5 font-semibold rounded-lg text-white">{ copied ? "Copied!" : "Copy documentation content" }</button>
        </CopyToClipboard>
      </PseudoNavBar>

      <div className="mx-auto mb-8" style={{maxWidth: '1280px'}}>
        <Content>
          <MarkdownEditor value={docs} onChange={(value, viewUpdate) => setDocs(value)} visible={true} />
        </Content>
      </div>
    </>
  );
};