import React from "react";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">BAR Sizing Fix</h1>
        <p className="text-center">
          The current implementation of the analyzeBAR function is resulting in incorrect BAR sizes. The size calculation logic needs to be corrected to ensure accurate results. Specifically, the size should be 16 KB given the BAR raw value, but the current output is incorrect.
        </p>
      </div>
    </div>
  );
};

export default Index;