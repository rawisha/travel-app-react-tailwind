import React from "react";

const SelectsCard = ({ bg, text }) => {
  return (
    <div className="relative">
      <img
        className="
      w-full object-cover h-full"
        src={bg}
        alt="/"
      />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-2xl text-white font bold absolute">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;
