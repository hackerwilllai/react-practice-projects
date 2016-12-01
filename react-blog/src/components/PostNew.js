import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { reduxForm, Field } from 'redux-form';

// set field component
const InputField = ({ input, name, label, type, meta: { touched, error } }) => (
  <div className={`form-group ${ touched && error && 'has-danger' }`}>
    <label htmlFor={name}>{label}</label>
    <input {...input} id={name} type={type} placeholder={label} className="form-control"/>
    { touched && error && <div className="text-help" style={{color: '#d9534f'}}>{error}</div> }
  </div>
);

const TextAreaField = ({ input, name, label, type, meta: { touched, error } }) => (
  <div className={`form-group ${ touched && error && 'has-danger' }`}>
    <label htmlFor={name}>{label}</label>
    <textarea {...input} id={name} placeholder={label} className="form-control"/>
    { touched && error && <div className="text-help" style={{color: '#d9534f'}}>{error}</div> }
  </div>
);

// validate form
const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required Title'
  }
  if (!values.categories) {
    errors.categories = 'Required Categories'
  }
  if (!values.content) {
    errors.content = 'Required Content'
  } else if(values.content.length < 10 ) {
    errors.content = "Must be more than 10 characters."
  }

  return errors;
}


class PostNew extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.postNewFormSubmit = this.postNewFormSubmit.bind(this);
  }

  postNewFormSubmit(values) {
    this.props.createPost(values)
      .then(() => {
        this.props.router.push('/');
      });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.postNewFormSubmit)}>
        <h4>Create A New Post</h4>
        <br/>
        <Field name="title" type="text" label="Title" component={InputField}/>
        <Field name="categories" type="text" label="Categories" component={InputField}/>
        <Field name="content" label="Content" component={TextAreaField}/>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger" style={{marginLeft: '5px'}}>Cancel</Link>
      </form>
    );
  }
}

// setup Redux Form
PostNew = reduxForm({
  form: 'PostNewForm',
  validate
})(PostNew);


export default connect(null, { createPost })(PostNew);