import React, { useState } from "react";

function First() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(
      `https://api.unsplash.com/photos/?client_id=${"5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02"}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  // console.log(data);
  return (
  <div>
      <div
        style={{
          height: "3rem",
          backgroundColor: "blue",
          borderRadius: "10px",
        }}
      >
        <h1 style={{color: "white", textAlign: "center" }}>Photos</h1>
      </div>
      <div>
        {data.map( (item) => {
          return (
            <img
              style={{
                height: "45rem",
                justifyContent: "space-between",
                marginLeft: "10rem",
              }}
              src={item.urls.regular}
            />
          );
        })}
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <button
            onClick={getData}
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
            Open Images
          </button>
        </div>
      </div>   
  </div>
  );
}
export default First;
