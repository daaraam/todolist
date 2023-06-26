import React, { useState } from "react";
import "./App.css";

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
    const completedTodo = box.filter((item) => item.id === id)[0];
    completedTodo.done = !completedTodo.done;
    setBox([...box]);
    console.log(box);
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
        {box.map((item) =>
          item.done ? (
            <div></div>
          ) : (
            <div className="todo-list" key={item.id}>
              <div className="todo-container">
                <h2 className="todo-title">{item.title}</h2>
                <div className="todo-text">{item.detail}</div>

                <div className="button-group">
                  <button
                    onClick={() => deleteBtnHandler(item.id)}
                    className="delete-btn"
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => completeBtnHandler(item.id)}
                    className="complete-btn"
                  >
                    {item.done ? "취소" : "완료"}
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* item.done가 true인 애들만 띄우자 */}
      <div className="todo-list">
        <h2>Done..!😎</h2>
        <div className="todo-wrap">
          {box.map((item) =>
            item.done ? (
              <div className="todo-list" key={item.id}>
                <div className="todo-container">
                  <h2 className="todo-title">{item.title}</h2>
                  <div className="todo-text">{item.detail}</div>

                  <div className="button-group">
                    <button
                      onClick={() => deleteBtnHandler(item.id)}
                      className="delete-btn"
                    >
                      삭제하기
                    </button>
                    <button
                      onClick={() => completeBtnHandler(item.id)}
                      className="complete-btn"
                    >
                      {item.done ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
