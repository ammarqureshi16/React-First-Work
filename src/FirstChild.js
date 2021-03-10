import React from "react";

function First(props) {
  let naam = "User Data One.";
  console.log(props);

  return (
    <div>
      <h2>{naam} </h2>
      {props.arrobj1.map(function (item) {
        return (
          <ul>
            <li> {item.user} </li>
            <li> {item.age} </li>
          </ul>
        );
      })}
    </div>
  );
}
export default First;
