import React, { useState } from "react";
import FirstChild from "./FirstChild";
import Childtwo from "./Childtwo";
import Off from "./Asset/Imag/off.jpg";
import On from "./Asset/Imag/on.jpeg";

// const arrobj1 = [
//   { user: "Ammar Qureshi", age: 17 },
//   { user: "Osama Haroon", age: 19 },
//   { user: "Hammad", age: 20 },
// ];
// const arrobj2 = [
//   { user: "Areeb Shakeel", age: 22 },
//   { user: "Arshaq Shakeel", age: 25 },
//   { user: "Arif Shakeel", age: 20 },
// ];

function Parent() {
  // let naam = "Parent.";
  // let title1 = "I am Osama";
  // let title2 = "I am Ammar";
  const [Bulb, setBulb] = useState(false);
  return (
    <div>
      {Bulb === false ? <img style={{ width: "20%",height:"20rem" }} src={Off} /> : ""}
      {Bulb === true ? <img style={{ width: "20%",height:"20rem" }} src={On} /> : ""}

      <button onClick={() => (Bulb === true ? 
        setBulb(false) : 
        setBulb(true))}>
        {Bulb === false ? "On Bulb" : "Off BUlb"}
      </button>
      {/* <h1>{naam}</h1>nom */}
      {/* <FirstChild arrobj1={arrobj1} />
      <Childtwo arrobj2={arrobj2} /> */}
    </div>
  );
}
export default Parent;
