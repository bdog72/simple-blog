import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Postsnew extends Component {
  render () {
    return (
      <div>
        <div className='text-right'>
          <Link className='btn btn-primary' to='/'>
            Back to Home
          </Link>
        </div>
        <h2>New Posts</h2>
      </div>
    )
  }
}
