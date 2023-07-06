import React, { useState } from 'react';
import { styled } from 'styled-components';
import '../App.css';
import DoneTodoWrapper from '../Components/DoneTodoWrapper';
import InputContainer from '../Components/InputContainer';
import TodoWrapper from '../Components/TodoWrapper';

function Main() {
	const [todo, setTodo] = useState([]);

	return (
		<StMainContainer>
			<StTitleContainer>
				<div>My Todo List.. 🤍</div>
				<div>React</div>
			</StTitleContainer>
			<InputContainer todo={todo} setTodo={setTodo} />
			<StTitleBox> working.. 🤍</StTitleBox>
			<TodoWrapper />
			<StTitleBox>Done.. 💜</StTitleBox>
			<DoneTodoWrapper />{' '}
		</StMainContainer>
	);
}

export default Main;

const StTitleBox = styled.h2`
	margin-left: 20px;
`;
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
