import React, { useState } from "react";
import Login from "./Login";
function Signup() {
  // Assigment Signup
  //     //  States
  const [firstemail, setFirstemail] = useState("Admin@domain.com");
  const [firstpassword, setPassword] = useState("abc123");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // Email Input Value
  const valueemail = (e) => {
    // console.log("___>>",name)
    const inpemail = e.target.value;
    // console.log("Email Input Value  " + inpemail);
    setEmail(inpemail);
  };
  // Password Input Value
  const valuepass = (e) => {
    const inppass = e.target.value;
    // console.log("Password Input Value", inppass);
    setPass(inppass);
  };
  const data = () => {
    {
      email === firstemail && pass === firstpassword
        ? alert("login Successfull")
        : alert("login Faill");
    }
  };
  return (
    <div>
      <div>
        <h1>
          Signup
        </h1>
        <input
          type="email"
          placeholder="Enter your Email :"
          onChange={(e) => valueemail(e)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Your Password :"
          onChange={(e) => valuepass(e)}
        />
        <br />
        <button onClick={data}>Login</button>
      </div>
    </div>
  );
}
export default Signup;
