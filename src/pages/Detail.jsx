import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

function Detail() {
	const id = useParams().id;
	const todo = useSelector(e => e.todoReducer);
	const findTodo = todo.find(item => item.id === +id);
	return (
		<div>
			<StDetailBox>
				<StTop>
					<StID>{findTodo.id}</StID>
					<StLink to="/"> 이전으로 </StLink>
				</StTop>
				<StTodoDetail>
					<h2>{findTodo.title}</h2>
					<p>{findTodo.content}</p>
				</StTodoDetail>
			</StDetailBox>
		</div>
	);
}

const StDetailBox = styled.div`
	border: 3px solid palevioletred;
	margin: 0 auto;
	width: 500px;
	height: 300px;
	padding: 25px;
	margin-top: 50px;
	background-color: lavenderblush;
	border-style: dashed;
`;

const StTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StID = styled.p`
	color: palevioletred;
	font-size: 8pt;
`;

const StLink = styled(Link)`
	color: palevioletred;
	font-size: 15pt;
`;

const StTodoDetail = styled.div`
	padding: 30px;
`;

export default Detail;
