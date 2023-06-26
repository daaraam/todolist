import React, { useState } from "react";
import "./App.css";

function App() {
  const [box, setBox] = useState([
    { id: 1, title: "React 공부", detail: "todoList 만들기" },
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
    alert("추가!");
    event.preventDefault();
    const newBox = {
      id: box.length + 1,
      title: title,
      detail: detail,
    };

    setTitle("");
    setDetail("");
    setBox([...box, newBox]);
  };

  return (
    <div className="layout">
      <div className="title">
        <p>My Todo List</p>
        <p>React</p>
      </div>

      <form className="input-container">
        <div className="input-line">
          <label className="input-label">제목</label>
          <input
            onChange={inputTitleChangeHandler}
            value={title}
            className="input"
          />
          <label className="input-label">내용</label>
          <input
            onChange={inputDetailChangeHandler}
            value={detail}
            className="input"
          />{" "}
        </div>
        <button onClick={addBtnHandler} className="add-btn">
          추가하기
        </button>
      </form>
      <h2 className="working">Working..💻</h2>
      <div className="todo-wrap">
        {box.map((item) => (
          <div className="todo-list" key={item.id}>
            <div className="todo-container">
              <h2 className="todo-title">{item.title}</h2>
              <div className="todo-text">{item.detail}</div>

              <div className="button-group">
                <button className="delete-btn">삭제하기</button>
                <button className="complete-btn">완료</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="todo-list">
        <h2>Done..!😎</h2>
      </div>
    </div>
  );
}

export default App;
