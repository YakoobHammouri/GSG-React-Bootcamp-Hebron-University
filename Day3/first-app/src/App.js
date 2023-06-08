import "./App.css";
import React from "react";
import Persons from "./persons";
import Counter from "./Counter";

function App() {
  const name = "yakoob";
  const persons = [
    { name: "Ali", email: "user1@on.com" },
    { name: "yakoob", email: "user2@on.com" },
    { name: "Ahmad", email: "user3@on.com" },
    { name: "mohammed", email: "user4@on.com" },
  ];

  const funAsProps = () => {
    alert("Hi this alert from function pass as props");
  };

  return (
    <div className="App">
      <h1>{`my Name is ${name}`}</h1>
      <h1>using map method to build Person Components</h1>
      <h1>we learn pass data as Props and pass function as props</h1>
      <ul>
        {persons.map((person, index) => (
          <Persons
            key={index}
            name={person.name}
            email={person.email}
            fun={funAsProps}
          />
        ))}
      </ul>
      <h1>========================= work with stat ==================</h1>
      <Counter />
    </div>
  );
}

export default App;
