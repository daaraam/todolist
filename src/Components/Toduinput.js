import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../modules/Todo';

function TodoInput() {
	const [title, setTitle] = useState('');
	const [contents, setContents] = useState('');
	const dispatch = useDispatch();

	const titleChange = event => {
		setTitle(event.target.value);
	};

	const contentsChange = event => {
		setContents(event.target.value);
	};

	const onClickHandler = () => {
		const newTodo = {
			id: Date.now(),
			title,
			contents,
			done: false,
		};
		dispatch(addTodo(newTodo));
		setTitle('');
		setContents('');
	};

	return (
		<InputContainer>
			<InputStyled type="text" placeholder="Title" onChange={titleChange} value={title} />
			<InputStyled type="text" placeholder="Contents" onChange={contentsChange} value={contents} />
			<ButtonStyled onClick={onClickHandler}>+</ButtonStyled>
		</InputContainer>
	);
}

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	padding-top: 70px;
`;
const InputStyled = styled.input`
	width: '100px';
	height: '50px';

	border: 1px solid black;
	border-radius: 3px;
	margin-right: 20px;
	padding: 5px 5px 5px 5px;
`;
const ButtonStyled = styled.button`
	background-color: #ff7c7c;
	width: 30px;
	height: 30px;
	border-radius: 5px;

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	font-weight: 900;
	color: white;
`;
export default TodoInput;
