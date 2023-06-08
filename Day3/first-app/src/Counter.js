import React, { useState } from "react";

const Index = () => {
  // const [Val , FunToChangeVal] = useState(default Val)

  const [count, setCount] = useState(2);

  const increase = () => {
    // console.log("count :>> ", count);
    setCount(count + 1);
  };
  const decrease = () => {
    // console.log("count :>> ", count);
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count">
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Index;
