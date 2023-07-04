import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { addTodo } from '../redux/config/modules/todo';
// 멍 진 짱 ~!

function InputContainer() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const dispatch = useDispatch();

	const titleChangeHandler = event => {
		setTitle(event.target.value);
	};

	const contentChangeHandler = event => {
		setContent(event.target.value);
	};

	const addBtnHandler = event => {
		event.preventDefault();
		if (title.length === 0 || content.length === 0) {
			return;
		}
		if (title.length >= 20 || content.length >= 40) {
			return;
		}
		const newTodo = {
			id: Date.now(),
			title,
			content,
			done: false,
		};

		dispatch(addTodo(newTodo));
		setTitle('');
		setContent('');
		// console.log(newTodo);
	};

	return (
		<StInputWrap>
			<StInputContainer>
				<StLabelGroup>제목</StLabelGroup>
				<StInput type="text" onChange={titleChangeHandler} value={title} placeholder="title" />
				<label className="label-group">내용</label>
				<StInput onChange={contentChangeHandler} value={content} type="text" placeholder="content" />
				<StAddBtn onClick={addBtnHandler}>Add</StAddBtn>
			</StInputContainer>
		</StInputWrap>
	);
}

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
	font-family: 'UhBeeSe_hyun';
`;

const StAddBtn = styled.button`
	color: white;
	background-color: plum;
	border: none;
	border-radius: 15px;
	font-size: 16px;
	font-family: 'UhBeeSe_hyun';
	cursor: pointer;
	&: hover {
		background-color: #002ead;
		transition: 0.5s;
	}
`;

export default InputContainer;

// const [todo, dispatch] = useReducer(inputReducer, {
// 	title: '',
// 	content: '',
// });

// const titleChangeHandler = event => {
// 	const { value } = event.target;
// 	dispatch({
// 		type: 'TITLE_CHANGE_HANDLER',
// 		payload: { titleValue: value, title: 'title' },
// 	});
// };

// const contentChangeHandler = event => {
// 	const { value } = event.target;
// 	dispatch({
// 		type: 'CONTENT_CHANGE_HANDLER',
// 		payload: { contentValue: value, content: 'content' },
// 	});
// };

// const addBtnHandler = event => {
// 	event.preventDefault();

// 	if (todo.title.length === 0 || todo.content.length === 0) {
// 		return;
// 	}

// 	if (todo.title.length >= 20 || todo.content.length >= 40) {
// 		return;
// 	}

// 	const newTodo = {
// 		id: 1,
// 		title: todo.title,
// 		content: todo.content,
// 		done: false,
// 	};

// 	dispatch({ type: 'ADD_BTN_HANDLER', payload: { newTodo } });
// 	dispatch(addTodo(newTodo));
// 	titleInputRef.current.value = '';
// 	contentInputRef.current.value = '';
// };
