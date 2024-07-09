import React from "react";

function ButtonIcon({ children, ...props }) {
  return (
    <button
      className="bg-white hover:bg-gray-100 p-1.5 border-none rounded w- transition-all duration-200"
      {...props}
    >
      {React.cloneElement(children, {
        className: "w-5 h-5 text-brand-600",
      })}
    </button>
  );
}

export default ButtonIcon;
