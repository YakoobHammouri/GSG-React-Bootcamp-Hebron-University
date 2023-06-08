import React, { useState } from "react";

const TextBox = (props) => {
  const [text, setText] = useState("");

  const getText = (event) => {
    console.log("Text Data  : ", event.target.value);
    setText(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setText();
        }}
        value={text}
      />
    </div>
  );
};

export default TextBox;
