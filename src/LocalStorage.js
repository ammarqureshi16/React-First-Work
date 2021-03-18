import React, { useState } from "react";

function Local() {
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
    </div>
  );
}
export default Local;
