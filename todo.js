import React, { useEffect, useState } from "react";
const Todo = () => {
  return (
    <>
      <h1> ToDo App</h1>
      <div className="add-task">
        <input type="text" id="task" placeholder="Add a new task" />
        <button id="add-task">Add</button>
      </div>
      <ul>
        <li>
          <div className="todo-item">
            <span className="">Task Text</span>
            <button className="btn-done">Done</button>
            <button className="btn-delete">Delete</button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Todo;
