import React, { useState } from "react";
function Increteament() {
  const [num, setNum] = useState(1);
  const IncretNum = () => {
    setNum((num) => num + 1);
  };
  const decretNum = () => {
    setNum((num) => num - 1);
  };
  return (
    <div style={{ marginLeft: "30rem" }}>
      <div>
        <h1 style={{ marginLeft: "5rem" }}>{num}</h1>

        <button
          onClick={IncretNum}
          style={{
            width: "12rem",
            height: "2rem",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "blue",
            color: "white",
            marginBottom: "1%",
          }}
        >
          Increteament / Number
        </button>
      </div>
      <button
        onClick={decretNum}
        style={{
          width: "12rem",
          height: "2rem",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "red",
          color: "white",
        }}
      >
        Decreament / Number
      </button>
    </div>
  );
}

export default Increteament;
