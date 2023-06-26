const InputDetail=({inputDetailChangeHandler,detail,})=>{
    return (
    <> 
        <label className="input-label">내용</label>
        <input
        onChange={inputDetailChangeHandler}
        value={detail}
        className="input"
        />
    </>
)}

export default InputDetail