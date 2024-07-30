import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="w-full px-1.5 py-3 bg-white outline-none text-gray-500"
      placeholder={placeholder}
    />
  );
};

export default Input;
