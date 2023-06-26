const InputContainer =({addBtnHandler,inputTitleChangeHandler,title,inputDetailChangeHandler,detail})=>{
return(
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
        />
</div>
<button onClick={addBtnHandler} className="add-btn">
  추가하기
</button>
</form>
)}
export default InputContainer