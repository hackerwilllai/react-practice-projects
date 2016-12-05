import React from 'react';
import CreateTodoForm from './CreateTodoForm';
import TodoList from './TodoList';

const App = () => (
  <div className="container">
    <h2>Todo List Demo</h2>
    <br />
    <div className="row">
      <div className="col-sm-12 col-md-8">
        <CreateTodoForm />
      </div>
    </div>
    <br />
    <h3>List</h3>
    <TodoList />
  </div>
);

export default App;
