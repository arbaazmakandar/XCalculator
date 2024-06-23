import React from "react";

const Button = ({ handleOutput, children }) => {
  return (
    <button
      onClick={(e) => handleOutput(e)}
      style={{
        width: "10px",
        height: "10px",
        padding: "20px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "5px",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
