import React, { useState } from "react";
import "./App.css";
import Done from "./components/Done";
import Working from "./components/Working";
import InputContainer from "./components/InputContainer";

function App() {
  const [box, setBox] = useState([
    { id: 1, title: "React 공부", detail: "todoList 만들기", done: false },
  ]);

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const inputTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const inputDetailChangeHandler = (event) => {
    setDetail(event.target.value);
  };

  const addBtnHandler = (event) => {
    event.preventDefault();
    const newBox = {
      id: box.length + 1,
      title: title,
      detail: detail,
      done: false,
    };
    setTitle("");
    setDetail("");
    setBox([...box, newBox]);
  };

  const completeBtnHandler = (id) => {  
    const completedTodo = box.find((item) => item.id === id);
    completedTodo.done = !completedTodo.done;
    setBox([...box]);
  };

  const deleteBtnHandler = (id) => {
    const deletedBox = box.filter((item) => item.id !== id);
    setBox(deletedBox);
  };

  return (
    <div className="layout">
      <div className="title">
        <p>My Todo List</p>
        <p>React</p>
      </div>

      <InputContainer
        inputTitleChangeHandler={inputTitleChangeHandler}
        title={title}
        inputDetailChangeHandler={inputDetailChangeHandler}
        detail={detail}
        addBtnHandler={addBtnHandler}
      />

      <h2 className="working">Working..💻</h2>
      <Working
        box={box}
        deleteBtnHandler={deleteBtnHandler}
        completeBtnHandler={completeBtnHandler}
      />

      <h2 className="done">Done!!!😎</h2>
      <Done
        box={box}
        deleteBtnHandler={deleteBtnHandler}
        completeBtnHandler={completeBtnHandler}
      />
    </div>
  );
}

export default App;
