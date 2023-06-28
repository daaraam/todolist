import React from "react";

function InputContainer({
  title,
  titleChangeHandler,
  content,
  contentChangeHandler,
  addBtnHandler,
}) {
  return (
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
  );
}

export default InputContainer;
