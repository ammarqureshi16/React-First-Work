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
  // const [Bulb, setBulb] = useState(false);

  const [user, setUser] = useState("");

  const val = (e) => {
    const inp = e.target.value;
    console.log(inp);
    setUser(inp);
  };

  const submit = () => {
    console.log("state--->>" + user);
    localStorage.setItem("userName", user);
  };

  const [hide, setHide] = useState(false);

  const getName = localStorage.getItem("userName", user);

  const show = () => {
    console.log("getName--->>" + getName);
    setHide(true);
  };

  return (
    <div>
      <input placeholder="Enter Email :" onChange={val} />
      <button onClick={submit}>Submit</button>
      <button onClick={show}>{user === true ? show : ""}Show</button>
      {hide ? <p> {getName}</p> : ""}

      {/* <h1>
        {naam}
        {arrobj2[2].user}
      </h1>

      {arrobj2.map(function (item) {
       return  <h1>
          {item.user}
        </h1>
        // console.log(item.user)
      })}
      {Bulb === false ? <img style={{ width: "20%",height:"20rem" }} src={Off} /> : ""}
      {Bulb === true ? <img style={{ width: "20%",height:"20rem" }}  src={On} /> : ""}

      <button onClick={() => (Bulb === true ? 
        setBulb(false) : 
        setBulb(true))}>
        {Bulb === false ? "On Bulb" : "Off BUlb"}
      </button>
      <h1>{naam}</h1>nom
      <FirstChild arrobj1={arrobj1} />
      <Childtwo arrobj2={arrobj2} /> */}
    </div>
  );
}
export default Parent;
