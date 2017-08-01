import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class Postsnew extends Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField (field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    )
  }

  onSubmit (values) {
    console.log(values)
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <div>
        <div className='text-sm-right'>
          <Link className='btn btn-primary' to='/'>
            Home
          </Link>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label='Title'
            name='title'
            component={this.renderField}
          />
          <Field
            label='Categories'
            name='categories'
            component={this.renderField}
          />
          <Field
            label='Post Content'
            name='content'
            component={this.renderField}
          />
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

function validate (values) {
  const errors = {}

  if (!values.title) {
    errors.title = <h3 className='warnings'>Enter a Title</h3>
  }

  if (!values.categories) {
    errors.categories = <h3 className='warnings'>Enter a Category</h3>
  }

  if (!values.content) {
    errors.content = <h3 className='warnings'>Enter some Content</h3>
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(Postsnew)
