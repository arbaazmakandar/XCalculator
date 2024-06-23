import React, { useState } from "react";
import Keyboard from "./Keyboard";

const Calculator = () => {
  const [calculatorInput, setCalculatorInput] = useState("");
  const [output, setOutput] = useState("0");

  const handleOutput = (e) => {
    const buttonElement = e.target;
    const value = Array.from(buttonElement.childNodes[0].data)[0];

    if (value === "=") {
      if (calculatorInput === "") {
        setOutput("Error");
      } else {
        setOutput(eval(calculatorInput).toString());
      }
    } else if (value === "C") {
      setCalculatorInput("");
      setOutput("");
    } else {
      setCalculatorInput((prev) => prev + value);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "600px",
      }}
    >
      <h2>React Calculator</h2>
      <input type="text" value={calculatorInput} disabled />
      <div style={{ margin: "10px", color: "grey" }}>{output}</div>

      <Keyboard handleOutput={handleOutput} />
    </div>
  );
};

export default Calculator;
