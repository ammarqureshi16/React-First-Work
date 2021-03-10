import React from "react";

function Two(props) {
  console.log(props);
  let naam = "User Data Two";
  return (
    <div>
      <h3>{naam}</h3>
      {props.arrobj2.map(function (item) {
          return(
              <ul>
                  <li>
                      {item.user}
                  </li>
                  <li>
                      {item.age}
                  </li>
              </ul>
          )
          
      })}
    </div>
  );
}
export default Two;
