import {
  CREATE_TODO,
  CREATE_INPUT_TEXT_CHANGE,
  DELETE_TODO,
  COMPLATE_TODO } from '../actions';

const INITIAL_STATE = {
  todos: [{
    id: 0,
    content: 'First Todo',
    checked: false,
  }],
  text: '',
};

const TodoReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case CREATE_TODO: {
      const todo = {
        id: state.todos.reduce((maxId, next) => Math.max(maxId, next.id), -1) + 1,
        content: payload,
        checked: false,
      };
      return {
        ...state,
        todos: [...state.todos, todo],
        text: '',
      };
    }

    case CREATE_INPUT_TEXT_CHANGE:
      return { ...state, text: payload };

    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== payload) };

    case COMPLATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload) {
            return { ...todo, checked: !todo.checked };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default TodoReducer;
