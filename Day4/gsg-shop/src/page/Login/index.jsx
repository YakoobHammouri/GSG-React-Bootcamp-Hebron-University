import React, { useState } from "react";
import "./style.css";

const Index = (props) => {
  const { setIsLogin } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    console.log("subnimef dfd :>> ");
    if (!userName) {
      alert("Enter user Name");
      return;
    }

    if (!password) {
      alert("Enter Password ");
      return;
    }
    
    // then is Login
    setIsLogin(true);
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <label>UserName</label>
      <input
        type="text"
        name="uName"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <label>password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input type="submit" value={"Login"} />
    </form>
  );
};

export default Index;
