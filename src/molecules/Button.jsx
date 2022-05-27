import React from "react";

const Button = ({name, width}) => {
  return (
    <div className={`mb-5 w-[${width}]`} >
      <button
        type="button"
        className="bg-slate-500 px-4 py-3 rounded-[4px] text-xl text-white hover:shadow-md hover:opacity-95 w-full"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
