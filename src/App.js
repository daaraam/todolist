import React, { useState } from "react";
import "./App.css";
import InputContainer from "./Components/InputContainer";
import TodoWrapper from "./Components/TodoWrapper";
import DoneTodoWrapper from "./Components/DoneTodoWrapper";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState([
    { id: 1, title: "ToDoList", content: "다시 만들어보자", done: false },
  ]);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const addBtnHandler = (event) => {
    event.preventDefault();
    if (title.length === 0 || content.length === 0) {
      return;
    }

    if (title.length >= 20 || content.length >= 40) {
      return;
    }
    const newTodo = {
      id: todo.length + 1,
      title,
      content,
      done: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setContent("");
  };

  const delBtnHandler = (id) => {
    const deletedTodo = todo.filter((item) => item.id !== id);
    setTodo(deletedTodo);
  };

  const completeBtnHandler = (id) => {
    const doneTodo = todo.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTodo(doneTodo);
  };

  return (
    <div className="main-container">
      <div className="title-container">
        <div>My Todo List.. 🤍</div>
        <div>React</div>
      </div>
      <InputContainer
        title={title}
        titleChangeHandler={titleChangeHandler}
        content={content}
        contentChangeHandler={contentChangeHandler}
        addBtnHandler={addBtnHandler}
      />

      <h2 className="working">working.. 🤍</h2>
      <TodoWrapper
        todo={todo}
        delBtnHandler={delBtnHandler}
        completeBtnHandler={completeBtnHandler}
      />

      <h2 className="working">Done.. 💜</h2>
      <DoneTodoWrapper
        todo={todo}
        delBtnHandler={delBtnHandler}
        completeBtnHandler={completeBtnHandler}
      />
    </div>
  );
}

export default App;
