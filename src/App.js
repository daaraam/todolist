import React from "react";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <div className="title">
        <p>My Todo List</p>
        <p>React</p>
      </div>

      <form className="input-container">
        <div className="input-line">
          <label className="input-label">제목</label>
          <input className="input" />
          <label className="input-label">내용</label>
          <input className="input" />{" "}
        </div>
        <button className="add-btn">추가하기</button>
      </form>
    </div>
  );
}

export default App;
