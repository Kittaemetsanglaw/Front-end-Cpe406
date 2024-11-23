import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-bold ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
