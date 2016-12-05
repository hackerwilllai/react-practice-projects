import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, complateTodo } from '../actions';

const TodoList = (props) => {
  if (!props.todos || props.todos.length <= 0) {
    return <div>There are no todo yet</div>;
  }
  const listItem = props.todos.map(todo =>
    <li className={`list-group-item ${todo.checked ? 'complated' : ''}`} key={todo.id} >
      <input
        type="checkbox"
        className="todo-checkbox"
        onChange={() => props.complateTodo(todo.id)}
      />
      <button
        className="btn btn-danger btn-sm todo-delete"
        onClick={() => props.deleteTodo(todo.id)}
      >x</button>
      {todo.content}
    </li>);

  return (
    <ul className="list-group post-list-group">
      { listItem }
    </ul>
  );
};

TodoList.propTypes = {
  todos: React.PropTypes.Array.isRequired,
};

function mapStateToProps(state) {
  return { todos: state.todos.todos };
}

export default connect(mapStateToProps, { deleteTodo, complateTodo })(TodoList);
