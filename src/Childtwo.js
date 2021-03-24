import React, { useState } from "react";

function Two(props) {
  // TO-DO LIST
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const val = (e) => {
    const inp = e.target.value;
    console.log(inp);
    setText(inp);
  };
  const addItem = () => {
    const newList = [...list];
    console.log(newList);
    newList.push(text);
    setList(newList);
    setText("");
  };
  const deleted = (index) => {
    // console.log(index);
   let del=delete list[index,1]
    setList(del)
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <input onChange={val} value={text} placeholder="Enter The Text :" />
      <button onClick={addItem}>Add</button>
      {list.map(function (item, index)  {
        return (
          <div>
            <li>
              {item}
              <button onClick={() => deleted(index)}>Delet</button>
            </li>
          </div>
        );
      })}
    </div>
  );
}
export default Two;
