import React, { CSSProperties, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div style={containerStyles}>
      <input type="number" value={count} disabled style={inputStyles} />
      <button className="cap-btn" onClick={increment}>
        Count
      </button>
    </div>
  );
};

const containerStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "baseline",
};

const inputStyles: CSSProperties = {
  marginRight: "10px",
  width: "110px",
  padding: "10px",
};

export default Counter;
