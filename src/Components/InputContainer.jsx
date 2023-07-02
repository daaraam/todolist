import React from "react";
import { styled } from "styled-components";

const StInputWrap = styled.div`
  background-color: lavender;
  border-radius: 15px;
  padding: 30px;
  height: 30px;
  margin: 10px;
`;

const StInputContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

const StLabelGroup = styled.label`
  font-weight: 600;
  font-size: 20px;
`;

const StInput = styled.input`
  padding: 0px 12px;
  background-color: lavenderblush;
  width: 250px;
  height: 30px;
  border: none;
  border-radius: 15px;
  font-family: "UhBeeSe_hyun";
`;

const StAddBtn = styled.button`
  color: white;
  background-color: plum;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  font-family: "UhBeeSe_hyun";
  cursor: pointer;
  &: hover {
    background-color: #002ead;
    transition: 0.5s;
  }
`;

function InputContainer({
  title,
  titleChangeHandler,
  content,
  contentChangeHandler,
  addBtnHandler,
}) {
  return (
    <StInputWrap>
      <StInputContainer>
        <StLabelGroup>제목</StLabelGroup>
        <StInput
          type="text"
          onChange={titleChangeHandler}
          value={title}
          placeholder="title"
        />
        <label className="label-group">내용</label>
        <StInput
          onChange={contentChangeHandler}
          value={content}
          type="text"
          placeholder="content"
        />
        <StAddBtn onClick={addBtnHandler}>Add</StAddBtn>
      </StInputContainer>
    </StInputWrap>
  );
}

export default InputContainer;
