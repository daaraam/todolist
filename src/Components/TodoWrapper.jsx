import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const todoReducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_BTN_HANDLER':
			const { id } = action.payload;
			return state.filter(item => item.id !== id);

		case 'COMPLETE_BTN_HANDLER':
			const { todo } = action.payload;
			return state.map(item => (item.id === todo ? { ...item, done: !item.done } : item));

		default:
			return state;
	}
};

function TodoWrapper() {
	const [todo, dispatch] = useReducer(todoReducer, []);

	const delBtnHandler = id => {
		dispatch({ type: 'DELETE_BTN_HANDLER', payload: { id } });
	};

	const completeBtnHandler = id => {
		dispatch({ type: 'COMPLETE_BTN_HANDLER', payload: { todo } });
	};

	return (
		<StTodoWrapper>
			{todo.map(item =>
				item.done ? (
					<React.Fragment key={item.id}></React.Fragment>
				) : (
					<StTodoList key={item.id}>
						<StDetail to={`/detail/${item.id}`}>📜</StDetail>
						<StTitleText>{item.title}</StTitleText>
						<StTodoText>{item.content}</StTodoText>
						<StBtnContainer>
							<StDelBtn onClick={() => delBtnHandler(item.id)}>삭 제</StDelBtn>
							<StComBtn onClick={() => completeBtnHandler(item.id)}>
								{item.done ? '취 소' : '완 료'}
							</StComBtn>
						</StBtnContainer>
					</StTodoList>
				),
			)}
		</StTodoWrapper>
	);
}

export default TodoWrapper;

const StDetail = styled(Link)`
	padding: 3px;
	border: 3px solid lavender;
	background-color: palevioletred;
	color: palevioletred;
	border-radius: 6px;
	cursor: pointer;
`;
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
	font-family: 'UhBeeSe_hyun';
`;

const StTodoText = styled.p`
	display: flex;
	justify-content: center;
	font-family: 'UhBeeSe_hyun';
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
	font-family: 'UhBeeSe_hyun';
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
	font-family: 'UhBeeSe_hyun';
	width: 110px;
	height: 30px;
	cursor: pointer;
	&: hover {
		background-color: #002ead;
		transition: 0.5s;
	}
`;
