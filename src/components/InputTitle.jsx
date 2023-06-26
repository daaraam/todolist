const InputTitle =({inputTitleChangeHandler,title})=>{
    return (  
    <>
        <label className="input-label">제목</label>
        <input
        onChange={inputTitleChangeHandler}
        value={title}
        className="input"
        />
    </>
)}

export default InputTitle