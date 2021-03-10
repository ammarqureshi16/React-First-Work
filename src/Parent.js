import React from "react";
import FirstChild from "./FirstChild";
import Childtwo from "./Childtwo";

const arrobj1 = [
  { user: "Ammar Qureshi", age: 17 },
  { user: "Osama Haroon", age: 19 },
  { user: "Hammad", age: 20 },
];
const arrobj2 = [
  { user: "Areeb Shakeel", age: 22 },
  { user: "Arshaq Shakeel", age: 25 },
  { user: "Arif Shakeel", age: 20 },
];


function Parent() {
  let naam = "Parent.";
  let title1 = "I am Osama";
  let title2 = "I am Ammar";
  return (
    <div>
      {/* <h1>{naam}</h1> */}

      <FirstChild arrobj1={arrobj1} />
      <Childtwo arrobj2={arrobj2} />
    </div>
  );
}
export default Parent;
