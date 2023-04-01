import React from "react";

export const Content: React.FC<ContentProps> = ({children}) => {
  return (
    <div className="mx-4" style={{maxWidth: '1280px'}}>
        {children}
    </div>
  );
};

interface ContentProps {
    children: React.ReactNode;
};
