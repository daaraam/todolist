export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = payload => ({
	type: ADD_TODO,
	payload,
});

export const deleteTodo = payload => ({
	type: DELETE_TODO,
	payload,
});

export const toggleTodo = payload => ({
	type: TOGGLE_TODO,
	payload,
});

const initialState = [
	{
		id: 100,
		title: '제목을 입력해보세요!!!',
		content: '내용을 입력해보세요',
		done: false,
	},
];
const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_TODO:
			const id = action.payload;
			return state.filter(item => item.id !== id);
		// return state;

		case TOGGLE_TODO:
			const todo = action.payload;
			return state.map(item => (item.id === todo ? { ...item, done: !item.done } : item));
		// return state;

		case ADD_TODO:
			const newTodo = action.payload; // {id: 1688487088346, title: "aa", content: "aa", done: false} // {newTodo:.. 찾는데, 없으니까 undefined}
			return [...state, newTodo];
		// return state;

		default:
			return state;
	}
};

export default todoReducer;

// const inputReducer = (state, action) => {
// 	switch (action.type) {
// 		case 'TITLE_CHANGE_HANDLER':
// 			const { titleValue, title } = action.payload;
// 			return { ...state, [title]: titleValue };

// 		case 'CONTENT_CHANGE_HANDLER':
// 			const { contentValue, content } = action.payload;
// 			return { ...state, [content]: contentValue };

// 		case 'ADD_BTN_HANDLER':
// 			return { ...state };

// 		default:
// 			return state;
// 	}
// };
