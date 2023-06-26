import InputTitle from "./InputTitle"
import InputDetail from "./InputDetail"

const InputContainer =({addBtnHandler})=>{
return(
<form className="input-container">
<div className="input-line">
  <InputTitle/>
  <InputDetail/>
</div>
<button onClick={addBtnHandler} className="add-btn">
  추가하기
</button>
</form>
)}
export default InputContainer