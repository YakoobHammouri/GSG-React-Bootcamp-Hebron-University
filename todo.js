import React, { useEffect, useState } from "react";
const Todo = () => {
  const [task, setTask] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const gteTaskText = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    const taskObj = {
      id: Math.random() * 100,
      text: task,
      isDone: false,
      isDelete: false,
    };
    setTodoItems([...todoItems, taskObj]);
  };

  console.log("todoItems : ", todoItems);
  return (
    <>
      <h1> ToDo App</h1>
      <div className="add-task">
        <input
          type="text"
          id="task"
          placeholder="Add a new task"
          onChange={gteTaskText}
        />
        <button id="add-task" onClick={addTask}>
          Add
        </button>
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
