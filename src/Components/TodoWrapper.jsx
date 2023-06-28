import React from "react";

function TodoWrapper({ todo, delBtnHandler, completeBtnHandler }) {
  return (
    <div className="todo-wrapper">
      {todo.map((item) =>
        item.done ? (
          <></>
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
  );
}

export default TodoWrapper;
