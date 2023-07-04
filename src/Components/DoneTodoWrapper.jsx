import React from "react";
import { styled } from "styled-components";

const StTodoWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-left: 20px;
`;

const StTodoList = styled.li`
  background-color: lavenderblush;
  border: 6px solid lavender;
  border-radius: 12px;
  width: 300px;
  height: 250px;
  padding: 0 30px;
`;

const StTitleText = styled.h2`
  display: flex;
  justify-content: center;
  font-family: "UhBeeSe_hyun";
`;

const StTodoText = styled.p`
  display: flex;
  justify-content: center;
  font-family: "UhBeeSe_hyun";
  font-size: 14px;
  margin-bottom: 50px;
`;

const StBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 25px 0;
`;

const StDelBtn = styled.button`
  background-color: palevioletred;
  border: 3px solid lavender;
  color: white;
  border-radius: 6px;
  font-size: 15px;
  font-family: "UhBeeSe_hyun";
  width: 110px;
  height: 30px;
  cursor: pointer;
  &: hover {
    background-color: #002ead;
    transition: 0.5s;
  }
`;

const StComBtn = styled.button`
  background-color: palevioletred;
  border: 3px solid lavender;
  color: white;
  border-radius: 6px;
  font-size: 15px;
  font-family: "UhBeeSe_hyun";
  width: 110px;
  height: 30px;
  cursor: pointer;
  &: hover {
    background-color: #002ead;
    transition: 0.5s;
  }
`;

function DoneTodoWrapper({ todo, setTodo }) {
  const delBtnHandler = (id) => {
    const deletedTodo = todo.filter((item) => item.id !== id);
    setTodo(deletedTodo);
  };

  const completeBtnHandler = (id) => {
    const doneTodo = todo.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTodo(doneTodo);
  };

  return (
    <StTodoWrapper>
      {todo.map((item) =>
        item.done ? (
          <StTodoList key={item.id}>
            <StTitleText>{item.title}</StTitleText>
            <StTodoText>{item.content}</StTodoText>
            <StBtnContainer>
              <StDelBtn onClick={() => delBtnHandler(item.id)}>삭 제</StDelBtn>
              <StComBtn onClick={() => completeBtnHandler(item.id)}>
                {item.done ? "취 소" : "완 료"}
              </StComBtn>
            </StBtnContainer>
          </StTodoList>
        ) : (
          <></>
        )
      )}
    </StTodoWrapper>
  );
}

export default DoneTodoWrapper;
