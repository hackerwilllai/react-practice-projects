export const CREATE_TODO = 'CREATE_TODO';

export function createTodo(text) {
  return {
    type: CREATE_TODO,
    payload: text,
  };
}


export const CREATE_INPUT_TEXT_CHANGE = 'CREATE_INPUT_TEXT_CHANGE';

export function creatInputTextChange(text) {
  return {
    type: CREATE_INPUT_TEXT_CHANGE,
    payload: text,
  };
}

export const DELETE_TODO = 'DELETE_TODO';

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

export const COMPLATE_TODO = 'COMPLATE_TODO';

export function complateTodo(id) {
  return {
    type: COMPLATE_TODO,
    payload: id,
  };
}

