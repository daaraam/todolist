import React, { useState } from "react";
import "./App.css";

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
      <div className="input-form">
        <div className="input-container">
          <label className="label-group">제목</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={title}
            className="input"
            placeholder="title"
          />
          <label className="label-group">내용</label>
          <input
            onChange={contentChangeHandler}
            value={content}
            type="text"
            className="input"
            placeholder="content"
          />
          <button onClick={addBtnHandler} className="add-btn">
            Add
          </button>
        </div>
      </div>

      <h2 className="working">working.. 🤍</h2>
      <div className="todo-wrapper">
        {todo.map((item) =>
          item.done ? (
            <div></div>
          ) : (
            <div className="todo-list" key={item.id}>
              <h2 className="title-text">{item.title}</h2>
              <p className="todo-text">{item.content}</p>
              <div className="button-container">
                <button
                  onClick={() => delBtnHandler(item.id)}
                  className="del-btn"
                >
                  삭 제
                </button>
                <button
                  onClick={() => completeBtnHandler(item.id)}
                  className="com-btn"
                >
                  {item.done ? "취 소" : "완 료"}
                </button>
              </div>
            </div>
          )
        )}
      </div>
      <h2 className="working">Done.. 💜</h2>
      <div className="todo-wrapper">
        {todo.map((item) =>
          item.done ? (
            <div className="todo-list" key={item.id}>
              <h2 className="title-text">{item.title}</h2>
              <p className="todo-text">{item.content}</p>
              <div className="button-container">
                <button
                  onClick={() => delBtnHandler(item.id)}
                  className="del-btn"
                >
                  삭 제
                </button>
                <button
                  onClick={() => completeBtnHandler(item.id)}
                  className="com-btn"
                >
                  {item.done ? "취 소" : "완 료"}
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
