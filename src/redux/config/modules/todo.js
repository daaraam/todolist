// Reducer : redux에서 변화를 일으키는 함수 역할

const initialState = {
    id: 1,
    title: 'ToDoList',
    content: 'LV.2를 통과해보자',
    done: false,
};

const todo = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default todo;
