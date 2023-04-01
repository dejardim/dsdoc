import React from "react";

export const GenerateButton: React.FC = () => {
  return (
    <>
      <div className="mx-2">
        <div className="mt-4 border-t" style={{ borderColor: "#BEBEBE" }} />
      </div>
      <div className="mx-2 mt-4 mb-2">
        <button className="bg-[#1E1E1E] h-12 w-full rounded-sm text-white font-semibold">
          Generate
        </button>
      </div>
    </>
  );
};
