import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTodo, creatInputTextChange } from '../actions';

class CreateTodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.text.trim()) {
      this.props.createTodo(this.props.text);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            name="createTodoInput"
            type="text"
            className="form-control"
            placeholder="Add Todo..."
            onChange={e =>
              this.props.creatInputTextChange(e.target.value)
            }
            value={this.props.text}
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">Add</button>
          </span>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { text: state.todos.text };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTodo, creatInputTextChange }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodoForm);
