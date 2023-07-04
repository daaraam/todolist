import React, { useState } from "react";
import "../App.css"; // "../App.css"  ./ 해당위치
import InputContainer from "../Components/InputContainer";
import TodoWrapper from "../Components/TodoWrapper";
import DoneTodoWrapper from "../Components/DoneTodoWrapper";
import { styled } from "styled-components";
// import { useSelector } from "react-redux";

function Main() {
  const [todo, setTodo] = useState([]);

  return (
    <StMainContainer>
      <StTitleContainer>
        <div>My Todo List.. 🤍</div>
        <div>React</div>
      </StTitleContainer>
      <InputContainer todo={todo} setTodo={setTodo} />
      <h2 className="working">working.. 🤍</h2>
      <TodoWrapper todo={todo} />
      <h2 className="working">Done.. 💜</h2>
      <DoneTodoWrapper todo={todo} setTodo={setTodo} />{" "}
    </StMainContainer>
  );
}

export default Main;

const StMainContainer = styled.div`
  width: 1200px;
  height: 800px;
  margin: 0 auto;
`;

const StTitleContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-style: dashed;
  background-color: lavenderblush;
  color: palevioletred;
  padding: 0 20px;
  font-size: 20px;
  font-weight: 800;
`;
