import React from "react";
import classNames from "classnames";
import Heading from "./Heading";

const Logo = () => {
  return (
    <div className="text-center">
      {/* <img src="" alt="Logo" className="w-auto h-24" /> */}
      <Heading as="h1">
        <span className="flex flex-col w-full company__logo-text">
          <span className="-mb-2">ATBStudents&lsquo;</span>
          <span className="self-end">Tech-Talk</span>
        </span>
      </Heading>
    </div>
  );
};

export default Logo;
