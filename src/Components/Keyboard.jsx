import React from "react";
import Button from "./Button";

const Keyboard = ({ handleOutput }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "250px",
        height: "250px",
      }}
    >
      <Button handleOutput={handleOutput}>7</Button>
      <Button handleOutput={handleOutput}>8</Button>
      <Button handleOutput={handleOutput}>9</Button>
      <Button handleOutput={handleOutput}>+</Button>
      <Button handleOutput={handleOutput}>4</Button>
      <Button handleOutput={handleOutput}>5</Button>
      <Button handleOutput={handleOutput}>6</Button>
      <Button handleOutput={handleOutput}>-</Button>
      <Button handleOutput={handleOutput}>1</Button>
      <Button handleOutput={handleOutput}>2</Button>
      <Button handleOutput={handleOutput}>3</Button>
      <Button handleOutput={handleOutput}>*</Button>
      <Button handleOutput={handleOutput}>C</Button>
      <Button handleOutput={handleOutput}>0</Button>
      <Button handleOutput={handleOutput}>=</Button>
      <Button handleOutput={handleOutput}>/</Button>
    </div>
  );
};

export default Keyboard;
