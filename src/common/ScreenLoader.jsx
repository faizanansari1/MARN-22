import React from "react";
import { Blocks } from "react-loader-spinner";

const ScreenLoader = () => {
  return (
    <div className="loader-block">
      <Blocks
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        color="red"
        wrapperStyle={{}}
        // wrapperClass="blocks-wrapper"
      />
    </div>
  );
};

export default ScreenLoader;
