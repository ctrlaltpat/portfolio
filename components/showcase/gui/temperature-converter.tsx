import React, { ChangeEvent, CSSProperties, useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { target } = e;
    const { name, value } = target;

    if (parseInt(value)) {
      if (name === "celsius") {
        setCelsius(parseInt(value));
        setFahrenheit(parseInt(value) * (9 / 5) + 32);
      } else {
        setFahrenheit(parseInt(value));
        setCelsius((parseInt(value) - 32) * (5 / 9));
      }
    }
  };

  return (
    <div style={containerStyles}>
      <input
        name="celsius"
        type="number"
        value={celsius}
        style={inputStyles}
        onChange={handleChange}
      />
      <span>Celsius</span>
      <span>{`<===>`}</span>
      <input
        name="fahrenheit"
        type="number"
        value={fahrenheit}
        style={inputStyles}
        onChange={handleChange}
      />
      <span>Fahrenheit</span>
    </div>
  );
};

const containerStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "baseline",
};

const inputStyles: CSSProperties = {
  //   width: "110px",
  padding: "10px",
};

export default TemperatureConverter;
